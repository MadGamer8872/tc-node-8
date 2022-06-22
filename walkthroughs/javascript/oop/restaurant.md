# Object-Oriented Design

## Designing a program for a restaurant host service

### Things to consider

- how many tables
- how many seats per table
- wait time
- table availability
- table "full" definition
  - single vs multiple parties per table
- server (employee)
  - assigned to certain tables
- Reservations
  - list
  - how many
  - what times
  - what tables
- Queue for waiting parties
- Parties sitting at one table vs multiple
- Bar seating
- Out of stock menu items
- Restaurant hours
  - when to stop seating parties
- Seating areas (ex: inside/outside, dining room, etc)
- Time of day (type of meal: breakfast, lunch, dinner, etc)

### Core Objects

- Table
  - number of seats
  - party
  - type
  - id
- Seating Area
  - list of tables
  - location
  - name
  - id
- Restaurant
  - name
  - list of seating areas
  - list of employees
  - hours
  - menu
- Employee
  - name
- Host (type of employee)
  - ...
- Server (type of employee)
  - ...

### Actions for these objects

- Host can get the party size
- Host can get the preference of seating area from a party
- Host can reference/get available tables per party size and seating area preference
- Tables can become unavailable or available
- Tables can be assigned to parties/ Parties can be assigned to certain tables
- Seating area can become unavailable or available
- Restaurant can get a list of on-duty staff
- Restaurant can determine capacity based on day-to-day staff
