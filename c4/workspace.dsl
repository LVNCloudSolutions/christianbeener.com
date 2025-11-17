workspace "Christian Beener Portfolio Site" "A static website hosted on GitHub Pages, built using Tailwind CSS and deployed via GitHub Actions." {

    model {
        // 1. Actors and Primary Users
        user = person "Recruiter/Client"
        developer = person "Developer/Site Owner"
        
        // 2. External Systems
        github = softwareSystem "GitHub" "External Git platform hosting the code repository and providing the CI/CD environment." "External" {
            // Using aliases for reference
            githubPages = container "GitHub Pages" "Provides static file hosting and serving of the website via HTTPS." "CDN/Static Host" "External"
            githubActions = container "GitHub Actions" "The CI/CD pipeline responsible for building Tailwind CSS and deploying the site." "CI/CD Tool" "External"
        }
        formSpree = softwareSystem "Formspree" "Third-party service to handle form submissions and email notifications." "External" {
            // Using alias for reference
            formHandler = container "Form Handler" "Processes form submissions and sends email notifications." "SaaS" "External"
        }

        // 3. The System Under Development (SUD)
        webSystem = softwareSystem "christianbeener.com" "The responsive, content-rich frontend application." "Web Application" {
            // Using aliases for reference
            staticAssets = container "HTML/CSS/JS" "The final rendered HTML, and compiled TailwindCSS and JavaScript."
            contactForm = container "Contact Form" "Client-side logic to handle form submission and display toast notification." "JavaScript"
        }
        
        // 4. Relationships (Defined once, in the model)
        webSystem -> githubPages "Hosted via"
        user -> webSystem "Visits" "HTTPS"
        developer -> github "Commits code to"
        developer -> githubActions "Triggers build and deployment on code push to main branch." "Webhook"
        githubActions -> staticAssets "Compiles assets and pushes final build." "GitHub Actions"
        githubPages -> staticAssets "Serves latest version of assets from" "HTTPS"
        staticAssets -> contactForm "Provides client-side logic for"
        contactForm -> user "Displays success/failure notifications." "JavaScript"
        contactForm -> formHandler "Submits form data to" "HTTPS/JSON"
        formHandler -> contactForm "Returns submission status to" "HTTPS/JSON"
        formHandler -> developer "Sends email notifications to" "Email"
        
        // 5. Deployment Model Definition (Correctly Scoped)
        prodEnv = deploymentEnvironment "Production" {
            
            clientDevice = deploymentNode "Recruiter/Client Device" {
                // Instantiate the containers on the node
                containerInstance staticAssets 
                containerInstance contactForm 
            }
            
            githubPlatform = deploymentNode "GitHub Platform" "CI/CD & Hosting Environment" {
                // FIX: Renamed identifier to avoid collision with container `githubActions`
                githubActionsNode = deploymentNode "GitHub Actions Runner" { 
                    containerInstance githubActions
                }
                githubHost = deploymentNode "GitHub Pages Host" "Cloud Service" {
                    containerInstance githubPages
                }
            }
        }
    }

    views {
        // C1: System Context Diagram 
        systemContext webSystem "SystemContext" "Shows the users and primary external systems the website interacts with." {
            include *
            include developer
            autolayout lr
        }
        
        // C2: Container Diagram
        container webSystem "ContainerDiagram" "Details the major containers within the website system and their connection to external hosting services." {
            include *
            include developer
            autolayout lr
        }

        styles {
            element "Element" {
                color #0773af
                stroke #0773af
                strokeWidth 5
                shape roundedbox
            }
            element "Person" {
                shape person
            }
            element "Boundary" {
                strokeWidth 5
            }
            relationship "Relationship" {
                thickness 2
            }
        }
    }
}