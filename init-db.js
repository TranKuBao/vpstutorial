const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

async function initDB() {
  // Mở kết nối đến cơ sở dữ liệu
  const db = await open({
    filename: './database.db',
    driver: sqlite3.Database
  });

  // Tạo bảng flag
  await db.exec(`
    CREATE TABLE IF NOT EXISTS flag (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      value TEXT NOT NULL
    );
  `);

  // Thêm flag mẫu để kiểm tra (bạn có thể thay đổi giá trị này)
  await db.exec(`
    INSERT OR IGNORE INTO flag (id, value) VALUES (1, 'UMDCTF{TEST_FLAG}');
  `);

  console.log('Cơ sở dữ liệu đã được khởi tạo!');
  await db.close();
}

initDB().catch(err => {
  console.error('Lỗi khi khởi tạo cơ sở dữ liệu:', err);
});
