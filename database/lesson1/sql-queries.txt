-- Find out how many tasks are in the task table
1. SELCT COUNT(*) FROM task;
=> 35

-- Find out how many tasks in the task table do not have a valid due date
2. SELECT * FROM task WHERE due_date IS NULL;
=> 8

-- Find all the tasks that are marked as done
3. SELECT * FROM task WHERE status_id=3;
=> 12

-- Find all the tasks that are not marked as done
4. SELECT * FROM task WHERE status_id=1 OR status_id=2;
=> 23

-- Get all the tasks, sorted with the most recently created first
5. SELECT * FROM task ORDER BY created DESC;
=> 35

-- Get the single most recently created task
6. SELECT * FROM task ORDER BY created DESC LIMIT 1;
=> 1

-- Get the title and due date of all tasks where the title or description contains database
7. SELECT * FROM task WHERE title  LIKE '%database%';
=> 5

-- Get the title and status (as text) of all tasks
8. SELECT title, name FROM status INNER JOIN task ON status.id = task.status_id;
=> 35

-- Get the name of each status, along with a count of how many tasks have that status
9. SELECT status.name, COUNT(*) AS count FROM status JOIN task ON task.status_id = status.id GROUP BY 1;
=> Not started  - 8, In progress - 15, Done - 12

-- Get the names of all statuses, sorted by the status with most tasks first
10.SELECT status.name, COUNT(*) AS count FROM status JOIN task ON task.status_id = status.id GROUP BY 1 ORDER BY count DESC;

