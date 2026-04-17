\# 👨‍💼 Employee Management System



A full-stack \*\*Employee Management System\*\* built with \*\*React.js\*\* (Frontend) and \*\*Spring Boot\*\* (Backend), connected to a \*\*MySQL\*\* database. This project allows you to perform complete \*\*CRUD operations\*\* on employee records with a clean and responsive UI.



\---





\### 📋 Employee List

View all employees with their details like Name, Email, Department, Position, and Salary. Edit or Delete any employee directly from the list.



\---



\### ➕ Add Employee

&#x20;Fill in the form to add a new employee with all required details and save them to the database.



\---



\### ✏️ Edit Employee

Update existing employee details using the pre-filled edit form and save the changes instantly.



\---



\## 🛠️ Tech Stack



\### Frontend

| Technology | Purpose |

|------------|---------|

| React.js | UI Framework |

| Axios | HTTP Client for API calls |

| React Router DOM | Page Navigation |

| Bootstrap | Styling \& Responsive Design |



\### Backend

| Technology | Purpose |

|------------|---------|

| Spring Boot | Backend Framework |

| Spring Data JPA | Database ORM |

| Hibernate | ORM Implementation |

| MySQL | Relational Database |

| Maven | Build Tool |



\---



\## 🔗 Frontend \& Backend Integration



The React frontend communicates with the Spring Boot backend using \*\*Axios HTTP Client\*\*.



\### Base URL Configuration

```javascript

const BASE\_URL = "http://localhost:8086/api/employees";

```



\### How it works:

```

React (localhost:3000)

&#x20;       ↓  Axios HTTP Requests

Spring Boot (localhost:8086)

&#x20;       ↓  Spring Data JPA

MySQL Database (employee\_db)

```



\### CORS Configuration

The backend allows requests from the frontend using `@CrossOrigin`:

```java

@CrossOrigin(origins = "http://localhost:3000")

@RestController

@RequestMapping("/api/employees")

public class EmployeeController { ... }

```



\---



\## 📡 REST API Endpoints



| Method | Endpoint | Description |

|--------|----------|-------------|

| `GET` | `/api/employees` | Get all employees |

| `GET` | `/api/employees/{id}` | Get employee by ID |

| `POST` | `/api/employees` | Create new employee |

| `PUT` | `/api/employees/{id}` | Update employee by ID |

| `DELETE` | `/api/employees/{id}` | Delete employee by ID |



\### API Request \& Response Examples



\#### ✅ GET All Employees

```

GET http://localhost:8086/api/employees

```

```json

\[

&#x20; {

&#x20;   "id": 1,

&#x20;   "firstName": "Karthik",

&#x20;   "lastName": "Yadla",

&#x20;   "email": "karthik@123",

&#x20;   "department": "Mca",

&#x20;   "position": "Teacher",

&#x20;   "salary": 20000

&#x20; }

]

```



\#### ✅ POST Create Employee

```

POST http://localhost:8086/api/employees

Content-Type: application/json

```

```json

{

&#x20; "firstName": "Bhuvaneshwar",

&#x20; "lastName": "Poodari",

&#x20; "email": "bhuvaneshwar@gmail.com",

&#x20; "department": "IT",

&#x20; "position": "Developer",

&#x20; "salary": 50000

}

```



\#### ✅ PUT Update Employee

```

PUT http://localhost:8086/api/employees/1

Content-Type: application/json

```

```json

{

&#x20; "firstName": "Karthik",

&#x20; "lastName": "Yadla",

&#x20; "email": "karthik@updated.com",

&#x20; "department": "Mca",

&#x20; "position": "Senior Teacher",

&#x20; "salary": 30000

}

```



\#### ✅ DELETE Employee

```

DELETE http://localhost:8086/api/employees/1

```

```

Response: "Employee deleted successfully!"

```



\---



\## 📁 Project Structure



```

Employee-Management-System/

│

├── employee-backend/

│   └── employee-backend/

│       ├── src/main/java/com/employee/employee\_backend/

│       │   ├── controller/

│       │   │   └── EmployeeController.java   ← REST API endpoints

│       │   ├── model/

│       │   │   └── Employee.java             ← Entity class

│       │   ├── repository/

│       │   │   └── EmployeeRepository.java   ← JPA Repository

│       │   ├── service/

│       │   │   └── EmployeeService.java      ← Business Logic

│       │   └── EmployeeBackendApplication.java

│       └── src/main/resources/

│           └── application.properties        ← DB Configuration

│

└── employee-frontend/

&#x20;   └── src/

&#x20;       ├── components/

&#x20;       │   └── Navbar.js                     ← Navigation Bar

&#x20;       ├── pages/

&#x20;       │   ├── EmployeeList.js               ← View All Employees

&#x20;       │   ├── AddEmployee.js                ← Add New Employee

&#x20;       │   └── EditEmployee.js               ← Edit Employee

&#x20;       ├── services/

&#x20;       │   └── employeeService.js            ← Axios API calls

&#x20;       └── App.js                            ← Routes Configuration

```



\---



\## ⚙️ How to Run the Project



\### Prerequisites

\- Java 17+

\- Node.js 16+

\- MySQL 8+

\- Maven



\---



\### 🗄️ Step 1 — Setup MySQL Database

```sql

CREATE DATABASE employee\_db;

```



\---



\### 🖥️ Step 2 — Run Backend (Spring Boot)



```bash

cd employee-backend/employee-backend

mvn spring-boot:run

```

Backend runs on: \*\*http://localhost:8086\*\*



\#### application.properties

```properties

spring.datasource.url=jdbc:mysql://localhost:3306/employee\_db

spring.datasource.username=root

spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update

spring.jpa.show-sql=true

```



\---



\### 🌐 Step 3 — Run Frontend (React)



```bash

cd employee-frontend

npm install

npm start

```

Frontend runs on: \*\*http://localhost:3000\*\*



\---



\## ✨ Features



\- ✅ View all employees in a clean table

\- ✅ Add new employee with full details

\- ✅ Edit existing employee information

\- ✅ Delete employee with confirmation

\- ✅ RESTful API with Spring Boot

\- ✅ MySQL database integration

\- ✅ Axios HTTP client for API communication

\- ✅ React Router for page navigation

\- ✅ Responsive UI with Bootstrap



\---



\## 👨‍💻 Developer



\*\*Bhuvaneshwar Poodari\*\*

\- GitHub: \[@bhuvaneshwar-poodari](https://github.com/bhuvaneshwar-poodari)



\---



\## 📄 License



This project is open source and available under the \[MIT License](LICENSE).

