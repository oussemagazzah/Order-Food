# Food Ordering Website

A web application for ordering food online. The website allows users to browse menus, add items to their cart, and place orders. The application is built using PHP for backend development, MySQL for database management, JavaScript for client-side functionality, and CSS for styling.

## Features

- **User Registration & Login**: Users can create an account, log in, and manage their orders.
- **Browse Menu**: Users can view a list of available food items with details.
- **Cart Management**: Users can add/remove items from their cart and view the total.
- **Order Placement**: Users can complete their orders and receive confirmation.
- **Admin Panel**: Admins can manage the menu, view orders, and update order statuses.

## Technologies Used

- **Backend**: PHP
- **Frontend**: HTML, CSS, JavaScript
- **Database**: MySQL
- **Server**: Apache (or any server supporting PHP)

## Setup Instructions

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/your-username/food-ordering-website.git
    ```

2. Install the required software:
    - Ensure that you have **PHP** and **MySQL** installed. If not, you can install XAMPP or WAMP server to set up the PHP and MySQL environment.
    
3. Set up the database:
    - Import the SQL file provided (`database.sql`) into your MySQL database to create the necessary tables and sample data.
    - Update the database connection details in the `config.php` file to match your MySQL credentials.

4. Run the application:
    - Start your Apache and MySQL services (if using XAMPP/WAMP).
    - Open the project folder in your browser, e.g., `http://localhost/food-ordering-website`.

## Usage

1. **User Flow**:
    - Go to `index.php` to view the homepage.
    - Browse the menu, add food items to your cart, and proceed to checkout.
    - Create an account or log in to place an order.

2. **Admin Flow**:
    - Access the admin panel via `admin/manage_menu.php`.
    - Add, update, or delete menu items.
    - View and manage orders placed by users.

## Future Improvements

- **Payment Integration**: Add payment gateway support (e.g., PayPal or Stripe).
- **User Reviews**: Allow users to review menu items.
- **Order History**: Users can view past orders.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- XAMPP/WAMP for local development environment.
- FontAwesome for icons.
- Bootstrap for responsive design (if applicable).

---

Feel free to contact me for any questions or feedback regarding the project.
