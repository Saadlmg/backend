import requests

# Base URL of the API
base_url = 'http://localhost:3000'

# Function to register a new client
def register_client():
    url = f'{base_url}/api/clients/'
    data = {
        'nom': 'John',
        'prenom': 'Doe',
        'email': 'johndoe@example.com',
        'mot_de_passe': 'password123'
    }
    response = requests.post(url, json=data)
    print(response)
    print(response.json())

# Function to login as a client
def login_client():
    url = f'{base_url}/api/clients/login'
    data = {
        'email': 'johndoe@example.com',
        'password': 'password123'
    }
    response = requests.post(url, json=data)

    print(response)
    print(response.json())

# Function to make an authenticated request as a client
def get_clients():
    url = f'{base_url}/api/clients'
    headers = {
        'Authorization': 'Bearer <client_token>'
    }
    response = requests.get(url, headers=headers)
    print(response.json())

# Function to register a new admin
def register_admin():
    url = f'{base_url}/api/admins/'
    data = {
        'nom': 'Admin',
        'prenom': 'User',
        'email': 'admin@example.com',
        'mot_de_passe': 'password123'
    }
    
    response = requests.post(url, json=data)

    print(response)
    print(response.json())

# Function to login as an admin
def login_admin():
    url = f'{base_url}/api/admins/login'
    data = {
        'email': 'admin@example.com',
        'password': 'password123'
    }
    response = requests.post(url, json=data)
    print(response.json())

# Function to make an authenticated request as an admin
def get_admins():
    url = f'{base_url}/api/admins'
    headers = {
        'Authorization': 'Bearer <admin_token>'
    }
    response = requests.get(url, headers=headers)
    print(response.json())

# Test the authentication system
def test_authentication_system():
    register_client()
    login_client()
    # Save the client token for future authenticated requests

    register_admin()
    login_admin()
    # Save the admin token for future authenticated requests

    # Make authenticated requests as a client
    get_clients()

    # Make authenticated requests as an admin
    get_admins()

test_authentication_system()


import requests

# Base URL of your API
base_url = 'http://localhost:3000/api/clients'

# Create a new client
def create_client():
    data = {
        'nom': 'John',
        'prenom': 'Doe',
        'adresse': '123 Main St',
        'email': 'johndoe@example.com',
        'telephone': '123456789',
        'numero_permis': 'ABC123',
        'mot_de_passe': 'password123'
    }
    response = requests.post(base_url, json=data)
    print(response.json())

# Get all clients
def get_all_clients():
    response = requests.get(base_url)
    print(response.json())

# Get a client by ID
def get_client_by_id(client_id):
    url = f'{base_url}/{client_id}'
    response = requests.get(url)
    print(response.json())

# Update a client
def update_client(client_id):
    url = f'{base_url}/{client_id}'
    data = {
        'nom': 'Updated Name',
        'prenom': 'Updated Lastname',
        'adresse': '456 Elm St',
        'email': 'updated.email@example.com',
        'telephone': '987654321',
        'numero_permis': 'DEF456',
        'mot_de_passe': 'updatedpassword123'
    }
    response = requests.put(url, json=data)
    print(response.json())

# Delete a client
def delete_client(client_id):
    url = f'{base_url}/{client_id}'
    response = requests.delete(url)
    print(response.status_code)

# Test the API endpoints
create_client()
get_all_clients()
get_client_by_id(1)  # Replace 1 with the ID of an existing client
update_client(1)  # Replace 1 with the ID of an existing client
delete_client(1)  # Replace 1 with the ID of an existing client




import requests

# Base URL of your API
base_url = 'http://localhost:3000'

# API endpoint paths
create_admin_path = '/api/admins'
get_all_admins_path = '/api/admins'
get_admin_by_id_path = '/api/admins/{admin_id}'
update_admin_by_id_path = '/api/admins/{admin_id}'
delete_admin_by_id_path = '/api/admins/{admin_id}'

# Test createAdmin API
def test_create_admin():
    url = base_url + create_admin_path
    payload = {
        'nom': 'John',
        'prenom': 'Doe',
        'email': 'john.doe@example.com',
        'mot_de_passe': 'password123'
    }
    response = requests.post(url, json=payload)
    if response.status_code == 201:
        print("Admin created successfully.")
        print(response.json())
    else:
        print(f"Error creating admin. Status code: {response.status_code}")
        print(response.text)

# Test getAllAdmins API
def test_get_all_admins():
    url = base_url + get_all_admins_path
    response = requests.get(url)
    print(response.json())

# Test getAdminById API
def test_get_admin_by_id(admin_id):
    url = base_url + get_admin_by_id_path.format(admin_id=admin_id)
    print(url)
    response = requests.get(url)
    print(response.json())

def test_update_admin():
    admin_id = 1  # Update the admin with ID 1
    url = base_url + f"/api/admins/{admin_id}"
    print(url)
    payload = {
        'nom': 'Updated Name',
        'prenom': 'Updated Lastname',
        'email': 'updated.email@example.com',
        'mot_de_passe': 'updatedpassword123'
    }
    response = requests.put(url, json=payload)
    if response.status_code == 200:
        print("Admin updated successfully.")
        print(response.json())
    else:
        print(f"Error updating admin. Status code: {response.status_code}")
        print(response.text)

# Test deleteAdminById API
def test_delete_admin_by_id(admin_id):
    url = base_url + delete_admin_by_id_path.format(admin_id=admin_id)
    response = requests.delete(url)
    print(response.status_code)

# Run the test functions
test_create_admin()
test_get_all_admins()
test_get_admin_by_id(admin_id=1)
test_update_admin()
test_delete_admin_by_id(admin_id=1)
