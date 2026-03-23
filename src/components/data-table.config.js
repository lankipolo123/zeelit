/**
 * Data Table Configuration
 *
 * Define your table config object and pass it to <app-data-table .config=${config}>
 *
 * Config shape:
 * {
 *   columns:    Array<{ key, label, sortable?, render? }>,
 *   data:       Array<Object>,
 *   pageSize:   number   (default: 10),
 *   searchable: boolean  (default: true),
 *   selectable: boolean  (default: false),
 *   striped:    boolean  (default: false),
 * }
 */

// ── Example: Payments table ──────────────────────────────────────
export const paymentsTableConfig = {
  columns: [
    { key: 'id',     label: 'Invoice',  sortable: true },
    { key: 'status', label: 'Status',   sortable: true },
    { key: 'method', label: 'Method',   sortable: true },
    { key: 'amount', label: 'Amount',   sortable: true },
  ],
  data: [
    { id: 'INV-001', status: 'Paid',    method: 'Credit Card',  amount: 250.00 },
    { id: 'INV-002', status: 'Pending', method: 'PayPal',       amount: 150.00 },
    { id: 'INV-003', status: 'Paid',    method: 'Bank Transfer', amount: 350.00 },
    { id: 'INV-004', status: 'Failed',  method: 'Credit Card',  amount: 450.00 },
    { id: 'INV-005', status: 'Paid',    method: 'PayPal',       amount: 550.00 },
    { id: 'INV-006', status: 'Pending', method: 'Credit Card',  amount: 200.00 },
    { id: 'INV-007', status: 'Paid',    method: 'Bank Transfer', amount: 320.00 },
    { id: 'INV-008', status: 'Paid',    method: 'Credit Card',  amount: 175.00 },
  ],
  pageSize: 5,
  searchable: true,
  selectable: true,
  striped: false,
};

// ── Example: Users table ─────────────────────────────────────────
export const usersTableConfig = {
  columns: [
    { key: 'name',   label: 'Name',   sortable: true },
    { key: 'email',  label: 'Email',  sortable: true },
    { key: 'role',   label: 'Role',   sortable: true },
    { key: 'status', label: 'Status', sortable: true },
  ],
  data: [
    { name: 'Alice Johnson',  email: 'alice@example.com',  role: 'Admin',  status: 'Active' },
    { name: 'Bob Smith',      email: 'bob@example.com',    role: 'Editor', status: 'Active' },
    { name: 'Carol White',    email: 'carol@example.com',  role: 'Viewer', status: 'Inactive' },
    { name: 'Dan Brown',      email: 'dan@example.com',    role: 'Editor', status: 'Active' },
    { name: 'Eve Davis',      email: 'eve@example.com',    role: 'Admin',  status: 'Active' },
    { name: 'Frank Miller',   email: 'frank@example.com',  role: 'Viewer', status: 'Inactive' },
  ],
  pageSize: 5,
  searchable: true,
  selectable: false,
  striped: true,
};
