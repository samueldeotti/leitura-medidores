
# Backend Project - Samuel Deotti

The idea behind this API is to develop a backend service that manages the individual reading of water and gas consumption. To simplify the data collection process, the service will use AI to obtain measurements from photos of the meters. This approach aims to streamline the process of capturing consumption data, ensuring accuracy and reducing the need for manual intervention.

### How to Build and Run the Application

1. Clone the project from GitHub:
    ```bash
    git clone https://github.com/samueldeotti/smart-meter.git
    ```
   or
    ```bash
    git clone git@github.com:samueldeotti/smart-meter.git
    ```

2. Navigate to the project directory:
    ```bash
    cd smart-meter
    ```

3. Build and Run the Docker Compose services:
    ```bash
    docker-compose up --build
    ```

### How to Stop the Backend Application

To stop the application, press `Ctrl + C` in the terminal where Docker Compose is running, or run the following command in the project root directory:
    ```bash
    docker-compose down
    ```

### Backend Ports

The application will run on http://localhost:8080/

### Backend Endpoints

- POST /upload: `Responsible for receiving a base64 image, querying Gemini, and returning the measurement read by the API.`
- PATCH /confirm: `Responsible for confirming or correcting the value read by the LLM`
- GET: `Responsible for listing the measurements taken for a specific customer.`
