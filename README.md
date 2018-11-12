# angularMultiLayout
This is angular multilayer application with user registration, and login,logout features.
Angular,Material design, mongodb, jwt ,express is used .

Source code is organized as follows:

app
-----
    |---layouts : Contains full page layout for different screens.
    |      | --> home : Contains the landing page layout.
    |      | --> body-placeholder : a holding component.
    |      | --> admin-dashboard : Contains dashboard layout
    |
    |---pages : This contains components that fit into layouts.
    |     |---> home-page :Conatins the page content component.
    |     |---> admin-dashboard-page: Contains code for dashboard contents(and not the layout)
    |     |---> login : login component
    |     |---> register: register component
    |
    |---Services: This folder contains implementation of services such as auth etc ...
    |     |----> auth service : A service that talks to backend for login,logout,registration.
