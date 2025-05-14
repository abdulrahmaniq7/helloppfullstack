✅ 4. How to Use This:
Start only your project stack:

bash
Copy
Edit
docker-compose -f docker-compose.yml up -d
Start only Jenkins:

bash
Copy
Edit
docker-compose -f docker-compose.jenkins.yml up -d
Stop Jenkins without affecting the project:

bash
Copy
Edit
docker-compose -f docker-compose.jenkins.yml down
Stop your project stack without affecting Jenkins:

bash
Copy
Edit
docker-compose -f docker-compose.yml down

