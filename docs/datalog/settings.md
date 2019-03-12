---
prev: ./things
next: false
---

# Settings

This section of [Datalog](https://datalog.no) is used to manage the platform and its configuration. The settings page consists of the following individual sections

- Domains
- Users
- Rules
- Export data

## Domains

Domains are used to create groups were dashboards, devices and users are kept seperate. Meaning that a user in domain A cannot acccess a device or dashboard located in domain B.

![domains](../assets/domains.png)

The image shows the domain section of the settings page. Creating a domain is done by pressing the "+ domain" button in the upper right corner. Deleting a domain is accomplished by selecting one of the domains from the list, followed by clicking the thrash can.

## Users

The user sections is used to manage the users connected to the selected domain.

![users](../assets/users.png)

### Creating a user

::: tip Creating a user
When a user is created, an email is sent to the address specified during the registration. This e-mail contains a link which the newly created user must click on within 7 days to create a password.
:::

Creating a user is accomplished by clicking the "+ user" button in the top right corner of the screen. When the button is clicked, a form will appear. The following fields must be filled to complete the user registration process

- Username
- First name
- Last name
- E-mail
- Phone
- Domain

The rest of the fields are optional.

### Deleting a user

Deleting a user is accomplished by checking the desired user, followed by clicking the thrash can icon.

### Edit a user

Click the username of the desired user to edit the user.

## Rules

The rules section is used to configure new alarms for either a specific device, or a group of devices. It is possible to configure notification by SMS, E-mail and webhooks.

### Choose source

![source](../assets/rule_choose_source.png)

### Set rule

The set rule pane is used to configure which resource and threshould should trigger the alarm. 

![source](../assets/rule_set_rule.png)

The example above shows a rule for the Temp (temperature) resource. The rule triggers when the device reports a temperature above -10 degrees.

### Pick action

::: danger Maximum SMS recipients
Adding more than four recipients may lead to text messages not being sent. 
:::

Actions are used to notify users about alarms. [Datalog](https://datalog.no) supports notifications by means of text messages (SMS), e-mail and webhooks. To append a new action to the alarm, click the "+ action" button.

![source](../assets/rule_pick_actions.png)

Select the action type, the recipients of the action and the message. Above is an example of two actions, one e-mail and one SMS. 

#### Table of codes

The short codes in the value field of the table below are used to dynamically exchange the short code with values from the devices. An example message could be defined as: "Temperature alarm triggered, last measurement: ${resource.value}". In the example, ${resource.value} will be exhanged with the actual temperature that triggered the alarm.

| Description          	| Value                    	| 
|----------------------	|--------------------------	|
| Name of the device   	| ${thing.label}           	| 
| Name of the resource 	| ${resource.resourceName} 	| 
| Value of resource    	| ${resource.value}        	| 

## Export data