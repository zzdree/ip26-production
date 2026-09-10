/**
 * scripts/backup-db.js
 * Automated Snapshot Backup Script for Supabase Inventory Items
 * Fetches all inventory rows sorted deterministically to ensure clean git diffs.
 */

const fs = require('fs');
const path = require('path');

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://ssbkhhnnzwuykyeznpwd.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzYmtoaG5uend1eWt5ZXpucHdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc0MDQ1NzcsImV4cCI6MjEwMjk4MDU3N30.-zGe_xWDTBmo604VS39jl8o7YvhEQYb3fZvCV-fcEbk';

async function runBackup() {
  console.log(`[Backup] Connecting to Supabase at: ${SUPABASE_URL}`);
  
  // Deterministic order by item_id so git diffs only show true changes
  const endpoint = `${SUPABASE_URL}/rest/v1/inventory_items?select=*&order=item_id.asc`;

  try {
    const res = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText} - ${await res.text()}`);
    }

    const items = await res.json();
    console.log(`[Backup] Successfully retrieved ${items.length} inventory records.`);

    const totalLoaded = items.filter(it => it.loaded).length;
    const totalPacked = items.filter(it => it.packed).length;

    const backupPayload = {
      _meta: {
        exported_at: new Date().toISOString(),
        total_items: items.length,
        total_loaded: totalLoaded,
        total_packed: totalPacked,
        generator: 'GitHub Actions Auto-Backup Workflow'
      },
      items: items
    };

    const backupDir = path.resolve(__dirname, '..', 'backup');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }

    const backupFilePath = path.join(backupDir, 'inventory_backup.json');
    fs.writeFileSync(backupFilePath, JSON.stringify(backupPayload, null, 2), 'utf-8');

    console.log(`[Backup] Saved snapshot to: ${backupFilePath}`);
  } catch (err) {
    console.error('[Backup Error]', err);
    process.exit(1);
  }
}

runBackup();
