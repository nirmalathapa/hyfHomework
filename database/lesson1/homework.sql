1. SELCT COUNT(*) FROM task;
=> 35
2. SELECT * FROM task WHERE due_date IS NULL;
=> 8 
3. SELECT * FROM task WHERE status_id=3;
=> 12
4. SELECT * FROM task WHERE status_id=1 OR status_id=2;
=> 23
5. SELECT * FROM task ORDER BY created DESC;
=> 35
6. SELECT * FROM task ORDER BY created DESC LIMIT 1;
=> 1
7. SELECT * FROM task WHERE title  LIKE '%database%';
=> 5
8. SELECT title, name FROM status INNER JOIN task ON status.id = task.status_id;
=> 35
9. SELECT status.name, COUNT(*) AS count FROM status JOIN task ON task.status_id = status.id GROUP BY 1;
=> Not started  - 8, In progress - 15, Done - 12
10.SELECT status.name, COUNT(*) AS count FROM status JOIN task ON task.status_id = status.id GROUP BY 1 ORDER BY count DESC;

