export const courses = [
  {
    id: 'aws-2-in-1',
    title: 'AWS 2 In 1 (Solutions Architect & Developer Associate)',
    price: 48000,
    originalPrice: 60000,
    duration: '3 months',
    level: 'Intermediate',
    students: 600,
    instructor: 'Uzair Azmat',
    image: '/images/aws-course.jpg',
    description: 'Complete AWS certification bundle covering both Solutions Architect and Developer Associate certifications with hands-on labs.',
    features: [
      'AWS Solutions Architect Associate',
      'AWS Developer Associate',
      'Live weekend sessions',
      'Hands-on labs with real AWS environment',
      'Exam preparation and practice tests',
      'Lifetime community support',
      'Industry-recognized certification'
    ],
    curriculum: [
      {
        module: 'AWS Fundamentals',
        topics: [
          'Introduction to Cloud Computing',
          'AWS Global Infrastructure',
          'AWS Management Console',
          'AWS CLI and SDK',
          'AWS Account Setup and Billing'
        ]
      },
      {
        module: 'Identity and Access Management (IAM)',
        topics: [
          'IAM Users, Groups, and Roles',
          'IAM Policies and Permissions',
          'Multi-Factor Authentication (MFA)',
          'AWS Organizations',
          'Security Best Practices'
        ]
      },
      {
        module: 'Compute Services',
        topics: [
          'Amazon EC2 - Instance Types and Pricing',
          'EC2 Security Groups and Key Pairs',
          'Elastic Load Balancing (ELB)',
          'Auto Scaling Groups',
          'AWS Lambda Functions',
          'Amazon ECS and EKS',
          'AWS Batch'
        ]
      },
      {
        module: 'Storage Services',
        topics: [
          'Amazon S3 - Buckets, Objects, and Storage Classes',
          'S3 Security and Access Control',
          'Amazon EBS - Volume Types and Snapshots',
          'Amazon EFS - Elastic File System',
          'AWS Storage Gateway',
          'Amazon FSx'
        ]
      },
      {
        module: 'Database Services',
        topics: [
          'Amazon RDS - Relational Database Service',
          'Amazon DynamoDB - NoSQL Database',
          'Amazon ElastiCache',
          'Amazon Redshift',
          'Database Migration Service (DMS)',
          'Amazon Aurora'
        ]
      },
      {
        module: 'Networking and Content Delivery',
        topics: [
          'Amazon VPC - Virtual Private Cloud',
          'Subnets, Route Tables, and Internet Gateways',
          'NAT Gateways and VPC Endpoints',
          'Amazon CloudFront',
          'Amazon Route 53',
          'AWS Direct Connect',
          'VPC Peering and Transit Gateway'
        ]
      },
      {
        module: 'Security and Compliance',
        topics: [
          'AWS KMS - Key Management Service',
          'AWS CloudTrail',
          'AWS Config',
          'Amazon GuardDuty',
          'AWS Security Hub',
          'AWS WAF and Shield'
        ]
      },
      {
        module: 'Monitoring and Logging',
        topics: [
          'Amazon CloudWatch',
          'CloudWatch Logs and Metrics',
          'AWS X-Ray',
          'AWS CloudFormation',
          'AWS Systems Manager',
          'AWS Trusted Advisor'
        ]
      },
      {
        module: 'Developer Tools',
        topics: [
          'AWS CodeCommit',
          'AWS CodeBuild',
          'AWS CodeDeploy',
          'AWS CodePipeline',
          'AWS CodeStar',
          'AWS Cloud9'
        ]
      },
      {
        module: 'Application Integration',
        topics: [
          'Amazon SQS - Simple Queue Service',
          'Amazon SNS - Simple Notification Service',
          'Amazon API Gateway',
          'AWS Step Functions',
          'Amazon EventBridge',
          'AWS AppSync'
        ]
      },
      {
        module: 'Exam Preparation',
        topics: [
          'Solutions Architect Practice Tests',
          'Developer Associate Practice Tests',
          'Exam Tips and Strategies',
          'Mock Exams and Review',
          'Certification Registration Process'
        ]
      }
    ],
    prerequisites: [
      'Basic understanding of cloud computing',
      'Familiarity with Linux/Windows systems',
      'Basic networking knowledge'
    ],
    certification: 'AWS Solutions Architect Associate & AWS Developer Associate'
  },
  {
    id: 'devops-engineering',
    title: 'DevOps Engineering',
    price: 60000,
    originalPrice: 75000,
    duration: '4 months',
    level: 'Advanced',
    students: 850,
    instructor: 'Usman Ahmad',
    image: '/images/devops-engineering.jpg',
    description: 'Comprehensive DevOps engineering course covering CI/CD, containerization, orchestration, and cloud infrastructure automation.',
    features: [
      'Complete DevOps pipeline setup',
      'Docker and Kubernetes mastery',
      'CI/CD with Jenkins, GitLab, GitHub Actions',
      'Infrastructure as Code (Terraform, Ansible)',
      'Cloud platforms (AWS, Azure, GCP)',
      'Monitoring and observability',
      'Real-world project implementation'
    ],
    curriculum: [
      {
        module: 'DevOps Fundamentals',
        topics: [
          'Introduction to DevOps Culture',
          'DevOps Principles and Practices',
          'Agile and Lean Methodologies',
          'DevOps Toolchain Overview',
          'Continuous Integration vs Continuous Deployment'
        ]
      },
      {
        module: 'Version Control with Git',
        topics: [
          'Git Fundamentals and Commands',
          'Branching and Merging Strategies',
          'Git Workflows (GitFlow, GitHub Flow)',
          'Collaborative Development',
          'Git Hooks and Automation',
          'GitHub/GitLab/Bitbucket Integration'
        ]
      },
      {
        module: 'Linux Administration',
        topics: [
          'Linux Command Line Mastery',
          'File System and Permissions',
          'Process Management',
          'Network Configuration',
          'Shell Scripting and Automation',
          'System Monitoring and Troubleshooting'
        ]
      },
      {
        module: 'Containerization with Docker',
        topics: [
          'Docker Architecture and Components',
          'Images, Containers, and Registries',
          'Dockerfile Best Practices',
          'Docker Networking and Volumes',
          'Docker Compose for Multi-container Apps',
          'Container Security and Optimization'
        ]
      },
      {
        module: 'Container Orchestration with Kubernetes',
        topics: [
          'Kubernetes Architecture and Components',
          'Pods, Services, and Deployments',
          'ConfigMaps and Secrets',
          'Persistent Volumes and Storage',
          'Ingress Controllers and Load Balancing',
          'RBAC and Security Policies',
          'Helm Package Manager',
          'Monitoring and Logging in Kubernetes'
        ]
      },
      {
        module: 'CI/CD Pipeline Implementation',
        topics: [
          'Jenkins Installation and Configuration',
          'Pipeline as Code with Jenkinsfile',
          'GitLab CI/CD Pipelines',
          'GitHub Actions Workflows',
          'Build Automation and Testing',
          'Deployment Strategies (Blue-Green, Canary)',
          'Pipeline Security and Best Practices'
        ]
      },
      {
        module: 'Infrastructure as Code (Terraform)',
        topics: [
          'Terraform Fundamentals and HCL',
          'Providers and Resources',
          'State Management and Remote Backends',
          'Modules and Code Organization',
          'Terraform Cloud and Enterprise',
          'Multi-cloud Infrastructure Management'
        ]
      },
      {
        module: 'Configuration Management (Ansible)',
        topics: [
          'Ansible Architecture and Components',
          'Inventory Management',
          'Playbooks and Roles',
          'Variables and Templates',
          'Ansible Vault for Secrets',
          'AWX/Ansible Tower',
          'Integration with CI/CD Pipelines'
        ]
      },
      {
        module: 'Monitoring and Observability',
        topics: [
          'Prometheus Monitoring Setup',
          'Grafana Dashboards and Visualization',
          'ELK Stack (Elasticsearch, Logstash, Kibana)',
          'Application Performance Monitoring',
          'Alerting and Incident Response',
          'Distributed Tracing with Jaeger'
        ]
      },
      {
        module: 'Cloud DevOps',
        topics: [
          'AWS DevOps Services (CodePipeline, CodeBuild)',
          'Azure DevOps and Azure Pipelines',
          'Google Cloud Build and Deployment',
          'Multi-cloud DevOps Strategies',
          'Serverless DevOps with Lambda/Functions'
        ]
      },
      {
        module: 'Security in DevOps (DevSecOps)',
        topics: [
          'Security in CI/CD Pipelines',
          'Container Security Scanning',
          'Infrastructure Security Automation',
          'Secrets Management',
          'Compliance as Code',
          'Security Monitoring and Incident Response'
        ]
      },
      {
        module: 'Capstone Project',
        topics: [
          'End-to-end DevOps Pipeline Design',
          'Multi-tier Application Deployment',
          'Infrastructure Automation',
          'Monitoring and Alerting Setup',
          'Documentation and Best Practices',
          'Project Presentation and Review'
        ]
      }
    ],
    prerequisites: [
      'Linux system administration basics',
      'Programming knowledge (Python, Bash)',
      'Basic networking concepts',
      'Cloud computing fundamentals'
    ],
    certification: 'DevOps Engineer Professional Certificate'
  },
  {
    id: 'azure-2-in-1',
    title: 'Azure 2 In 1 (AZ-900 & AZ-104)',
    price: 40000,
    originalPrice: 50000,
    duration: '2.5 months',
    level: 'Beginner',
    students: 380,
    instructor: 'Ali Arslan',
    image: '/images/azure.jpg',
    description: 'Microsoft Azure fundamentals and administrator certification bundle with practical lab exercises and exam preparation.',
    features: [
      'Azure Fundamentals (AZ-900)',
      'Azure Administrator (AZ-104)',
      'Microsoft certified trainers',
      'Azure free tier lab access',
      'Exam vouchers included',
      'Practice tests and simulations',
      'Career guidance and placement support'
    ],
    curriculum: [
      {
        module: 'Azure Fundamentals (AZ-900)',
        topics: [
          'Cloud Computing Concepts',
          'Azure Architecture and Services',
          'Azure Management Tools',
          'Azure Pricing and Support',
          'Azure Security and Compliance'
        ]
      },
      {
        module: 'Core Azure Services',
        topics: [
          'Azure Compute Services',
          'Azure Storage Services',
          'Azure Networking Services',
          'Azure Database Services',
          'Azure App Services'
        ]
      },
      {
        module: 'Azure Security, Privacy, Compliance',
        topics: [
          'Azure Security Center',
          'Azure Key Vault',
          'Azure Information Protection',
          'Azure Governance Features',
          'Privacy and Compliance Resources'
        ]
      },
      {
        module: 'Azure Pricing and Support',
        topics: [
          'Azure Subscriptions',
          'Planning and Managing Costs',
          'Azure Support Options',
          'Azure Service Level Agreements',
          'Service Lifecycle in Azure'
        ]
      },
      {
        module: 'Azure Administrator (AZ-104)',
        topics: [
          'Azure Portal and PowerShell',
          'Azure CLI and ARM Templates',
          'Azure Resource Manager',
          'Azure Subscriptions and Governance',
          'Azure Policy and Blueprints'
        ]
      },
      {
        module: 'Manage Azure Identities and Governance',
        topics: [
          'Azure Active Directory',
          'Users and Groups Management',
          'Self-service Password Reset',
          'Azure AD Connect',
          'Role-based Access Control (RBAC)'
        ]
      },
      {
        module: 'Implement and Manage Storage',
        topics: [
          'Storage Accounts',
          'Blob Storage',
          'Azure Files',
          'Storage Security',
          'Storage Replication'
        ]
      },
      {
        module: 'Deploy and Manage Compute Resources',
        topics: [
          'Virtual Machines',
          'VM Availability',
          'VM Extensions',
          'App Service Plans',
          'Container Instances'
        ]
      },
      {
        module: 'Configure and Manage Virtual Networking',
        topics: [
          'Virtual Networks',
          'Network Security Groups',
          'Azure Firewall',
          'DNS Configuration',
          'VNet Peering'
        ]
      },
      {
        module: 'Monitor and Back up Azure Resources',
        topics: [
          'Azure Monitor',
          'Log Analytics',
          'Azure Backup',
          'Azure Site Recovery',
          'Azure Alerts'
        ]
      }
    ],
    prerequisites: [
      'Basic computer knowledge',
      'Understanding of networking concepts',
      'No prior Azure experience required'
    ],
    certification: 'Microsoft Azure Fundamentals (AZ-900) & Azure Administrator Associate (AZ-104)'
  },
  {
    id: 'linux-deep-dive',
    title: 'Linux Deep Dive',
    price: 27000,
    originalPrice: 35000,
    duration: '2 months',
    level: 'Intermediate',
    students: 920,
    instructor: 'Tanzeel Iqbal',
    image: '/images/linux.jpg',
    description: 'Master Linux system administration from basics to advanced concepts including shell scripting, system security, and performance tuning.',
    features: [
      'Linux fundamentals to advanced',
      'Shell scripting mastery',
      'System administration tasks',
      'Network configuration',
      'Security hardening',
      'Performance optimization',
      'Real-world scenarios'
    ],
    curriculum: [
      {
        module: 'Linux Fundamentals',
        topics: [
          'Linux History and Distributions',
          'Installation and Boot Process',
          'Command Line Interface',
          'File System Hierarchy',
          'Basic Commands and Navigation'
        ]
      },
      {
        module: 'File System and Permissions',
        topics: [
          'File Types and Attributes',
          'File Permissions and Ownership',
          'Access Control Lists (ACLs)',
          'File System Management',
          'Disk Partitioning and Mounting'
        ]
      },
      {
        module: 'User and Group Management',
        topics: [
          'User Account Management',
          'Group Administration',
          'Password Policies',
          'Sudo Configuration',
          'User Environment Setup'
        ]
      },
      {
        module: 'Package Management',
        topics: [
          'RPM and YUM (Red Hat/CentOS)',
          'APT and DPKG (Debian/Ubuntu)',
          'Source Code Compilation',
          'Dependency Resolution',
          'Repository Management'
        ]
      },
      {
        module: 'Process Management',
        topics: [
          'Process Lifecycle',
          'Process Monitoring and Control',
          'Job Scheduling with Cron',
          'System Load and Performance',
          'Signal Handling'
        ]
      },
      {
        module: 'System Services and Init Systems',
        topics: [
          'SystemD Service Management',
          'Service Configuration',
          'Boot Process and Runlevels',
          'System Targets',
          'Service Dependencies'
        ]
      },
      {
        module: 'Network Configuration',
        topics: [
          'Network Interface Configuration',
          'Routing and Gateway Setup',
          'DNS Configuration',
          'Firewall with iptables/firewalld',
          'Network Troubleshooting'
        ]
      },
      {
        module: 'Shell Scripting (Bash)',
        topics: [
          'Shell Scripting Fundamentals',
          'Variables and Parameters',
          'Control Structures and Loops',
          'Functions and Libraries',
          'Error Handling and Debugging',
          'Advanced Scripting Techniques'
        ]
      },
      {
        module: 'System Security and Hardening',
        topics: [
          'Security Best Practices',
          'SSH Configuration and Keys',
          'File System Security',
          'System Auditing',
          'Intrusion Detection',
          'Security Updates and Patches'
        ]
      },
      {
        module: 'Log Management and Analysis',
        topics: [
          'System Logging with rsyslog',
          'Log Rotation and Archiving',
          'Log Analysis Tools',
          'Centralized Logging',
          'Troubleshooting with Logs'
        ]
      },
      {
        module: 'Performance Monitoring and Tuning',
        topics: [
          'System Performance Metrics',
          'Resource Monitoring Tools',
          'Performance Bottleneck Analysis',
          'Kernel Tuning Parameters',
          'Storage Performance Optimization'
        ]
      },
      {
        module: 'Backup and Recovery',
        topics: [
          'Backup Strategies and Tools',
          'File System Snapshots',
          'Disaster Recovery Planning',
          'System Restoration Procedures',
          'Data Integrity Verification'
        ]
      }
    ],
    prerequisites: [
      'Basic computer knowledge',
      'Willingness to learn command line'
    ],
    certification: 'Linux System Administrator Certificate'
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes',
    price: 15000,
    originalPrice: 20000,
    duration: '1 month',
    level: 'Intermediate',
    students: 240,
    instructor: 'Usman Ahmad',
    image: '/images/kubernetes-img.jpg',
    description: 'Master Kubernetes container orchestration with hands-on labs covering deployment, scaling, and management of containerized applications.',
    features: [
      'Kubernetes fundamentals',
      'Pod and deployment management',
      'Service discovery and networking',
      'Storage and persistent volumes',
      'Monitoring and troubleshooting',
      'RBAC and security',
      'Production-ready clusters'
    ],
    curriculum: [
      {
        module: 'Kubernetes Architecture',
        topics: [
          'Kubernetes Components Overview',
          'Master Node Components',
          'Worker Node Components',
          'etcd and Cluster State',
          'Container Runtime Interface'
        ]
      },
      {
        module: 'Pods, ReplicaSets, and Deployments',
        topics: [
          'Pod Lifecycle and Management',
          'Multi-container Pods',
          'ReplicaSet Configuration',
          'Deployment Strategies',
          'Rolling Updates and Rollbacks'
        ]
      },
      {
        module: 'Services and Networking',
        topics: [
          'Service Types and Configuration',
          'ClusterIP, NodePort, LoadBalancer',
          'Ingress Controllers',
          'Network Policies',
          'DNS in Kubernetes'
        ]
      },
      {
        module: 'ConfigMaps and Secrets',
        topics: [
          'Configuration Management',
          'Environment Variables',
          'Volume Mounts',
          'Secret Types and Usage',
          'Security Best Practices'
        ]
      },
      {
        module: 'Persistent Volumes and Storage',
        topics: [
          'Storage Classes',
          'Persistent Volume Claims',
          'Dynamic Provisioning',
          'StatefulSets',
          'Storage Backends'
        ]
      },
      {
        module: 'Namespaces and Resource Management',
        topics: [
          'Namespace Isolation',
          'Resource Quotas',
          'Limit Ranges',
          'Horizontal Pod Autoscaler',
          'Vertical Pod Autoscaler'
        ]
      },
      {
        module: 'Monitoring and Logging',
        topics: [
          'Metrics Server',
          'Prometheus Integration',
          'Grafana Dashboards',
          'Centralized Logging',
          'Health Checks and Probes'
        ]
      },
      {
        module: 'Security and RBAC',
        topics: [
          'Role-Based Access Control',
          'Service Accounts',
          'Pod Security Policies',
          'Network Security',
          'Image Security Scanning'
        ]
      },
      {
        module: 'Helm Package Manager',
        topics: [
          'Helm Charts Creation',
          'Chart Templates',
          'Values and Configuration',
          'Chart Repositories',
          'Release Management'
        ]
      },
      {
        module: 'Troubleshooting and Debugging',
        topics: [
          'Cluster Debugging Techniques',
          'Pod and Service Troubleshooting',
          'Resource Debugging',
          'Performance Optimization',
          'Common Issues and Solutions'
        ]
      }
    ],
    prerequisites: [
      'Docker knowledge required',
      'Basic Linux command line',
      'Understanding of containerization'
    ],
    certification: 'Kubernetes Administrator Certificate'
  },
  {
    id: 'docker',
    title: 'Docker',
    price: 10000,
    originalPrice: 15000,
    duration: '3 weeks',
    level: 'Beginner',
    students: 1150,
    instructor: 'Usman Ahmad',
    image: '/images/docker-img.jpg',
    description: 'Learn containerization with Docker from basics to advanced concepts including image creation, networking, and orchestration.',
    features: [
      'Docker fundamentals',
      'Image creation and management',
      'Container networking',
      'Docker Compose',
      'Registry and deployment',
      'Best practices and security',
      'Production use cases'
    ],
    curriculum: [
      {
        module: 'Introduction to Containerization',
        topics: [
          'Containerization vs Virtualization',
          'Docker Architecture',
          'Docker Engine Components',
          'Installation and Setup',
          'Docker Desktop Overview'
        ]
      },
      {
        module: 'Docker Installation and Setup',
        topics: [
          'Linux Installation',
          'Windows Installation',
          'macOS Installation',
          'Post-installation Configuration',
          'Docker Engine API'
        ]
      },
      {
        module: 'Working with Images and Containers',
        topics: [
          'Docker Images and Layers',
          'Container Lifecycle',
          'Running and Managing Containers',
          'Image Pulling and Pushing',
          'Container Inspection and Logs'
        ]
      },
      {
        module: 'Dockerfile Best Practices',
        topics: [
          'Dockerfile Syntax and Instructions',
          'Multi-stage Builds',
          'Image Optimization Techniques',
          'Security Best Practices',
          'Build Context and .dockerignore'
        ]
      },
      {
        module: 'Docker Networking',
        topics: [
          'Network Drivers and Types',
          'Bridge Networks',
          'Host and Overlay Networks',
          'Container Communication',
          'Port Mapping and Exposure'
        ]
      },
      {
        module: 'Docker Volumes and Storage',
        topics: [
          'Volume Types and Management',
          'Bind Mounts vs Volumes',
          'Data Persistence Strategies',
          'Volume Drivers',
          'Backup and Restore'
        ]
      },
      {
        module: 'Docker Compose',
        topics: [
          'Compose File Structure',
          'Multi-container Applications',
          'Service Dependencies',
          'Environment Variables',
          'Scaling and Load Balancing'
        ]
      },
      {
        module: 'Docker Registry and Hub',
        topics: [
          'Docker Hub Usage',
          'Private Registry Setup',
          'Image Tagging and Versioning',
          'Automated Builds',
          'Registry Security'
        ]
      },
      {
        module: 'Container Security',
        topics: [
          'Security Scanning',
          'User Namespaces',
          'Resource Limitations',
          'Secrets Management',
          'Runtime Security'
        ]
      },
      {
        module: 'Production Deployment Strategies',
        topics: [
          'Container Orchestration Basics',
          'Health Checks and Monitoring',
          'Logging Strategies',
          'CI/CD Integration',
          'Performance Optimization'
        ]
      }
    ],
    prerequisites: [
      'Basic Linux knowledge',
      'Understanding of applications and services'
    ],
    certification: 'Docker Certified Associate'
  },
  {
    id: 'ansible',
    title: 'Ansible',
    price: 10000,
    originalPrice: 15000,
    duration: '3 weeks',
    level: 'Intermediate',
    students: 420,
    instructor: 'Tayyab Liaqat',
    image: '/images/ansible-img.jpg',
    description: 'Master infrastructure automation with Ansible including playbooks, roles, and advanced automation techniques.',
    features: [
      'Ansible fundamentals',
      'Playbook development',
      'Inventory management',
      'Roles and collections',
      'Advanced automation',
      'AWX/Tower integration',
      'Real-world scenarios'
    ],
    curriculum: [
      {
        module: 'Ansible Fundamentals',
        topics: [
          'Introduction to Configuration Management',
          'Ansible Architecture',
          'Installation and Setup',
          'SSH Key Management',
          'Ansible Configuration Files'
        ]
      },
      {
        module: 'Inventory and Configuration',
        topics: [
          'Static and Dynamic Inventories',
          'Host Groups and Variables',
          'Inventory Plugins',
          'Host Patterns',
          'Connection Methods'
        ]
      },
      {
        module: 'Ad-hoc Commands',
        topics: [
          'Command Line Usage',
          'Module Execution',
          'Parallel Execution',
          'Output Formatting',
          'Common Use Cases'
        ]
      },
      {
        module: 'Playbooks and YAML',
        topics: [
          'YAML Syntax and Structure',
          'Playbook Components',
          'Tasks and Modules',
          'Play Execution Order',
          'Error Handling'
        ]
      },
      {
        module: 'Variables and Facts',
        topics: [
          'Variable Types and Scope',
          'Fact Gathering',
          'Custom Facts',
          'Variable Precedence',
          'Magic Variables'
        ]
      },
      {
        module: 'Conditionals and Loops',
        topics: [
          'When Conditions',
          'Loop Types and Usage',
          'Complex Conditionals',
          'Failed When and Changed When',
          'Blocks and Error Handling'
        ]
      },
      {
        module: 'Handlers and Templates',
        topics: [
          'Handler Definition and Usage',
          'Jinja2 Templating',
          'Template Variables',
          'File and Configuration Management',
          'Dynamic Content Generation'
        ]
      },
      {
        module: 'Roles and Galaxy',
        topics: [
          'Role Structure and Organization',
          'Role Dependencies',
          'Ansible Galaxy',
          'Role Development Best Practices',
          'Collections and Namespaces'
        ]
      },
      {
        module: 'Ansible Vault',
        topics: [
          'Encrypting Sensitive Data',
          'Vault File Management',
          'Vault IDs and Passwords',
          'Integration with Playbooks',
          'Security Best Practices'
        ]
      },
      {
        module: 'AWX and Ansible Tower',
        topics: [
          'AWX Installation and Setup',
          'Web Interface Overview',
          'Job Templates and Workflows',
          'Credential Management',
          'RBAC and Team Management'
        ]
      }
    ],
    prerequisites: [
      'Linux system administration',
      'Basic YAML knowledge',
      'SSH understanding'
    ],
    certification: 'Ansible Automation Certificate'
  },
  {
    id: 'jenkins',
    title: 'Jenkins',
    price: 10000,
    originalPrice: 15000,
    duration: '3 weeks',
    level: 'Intermediate',
    students: 380,
    instructor: 'Usman Ahmad',
    image: '/images/jenkins-img.jpg',
    description: 'Master CI/CD with Jenkins including pipeline creation, automation, and integration with various tools and platforms.',
    features: [
      'Jenkins fundamentals',
      'Pipeline as Code',
      'Plugin ecosystem',
      'Integration with SCM',
      'Deployment automation',
      'Monitoring and notifications',
      'Best practices'
    ],
    curriculum: [
      {
        module: 'Jenkins Installation and Setup',
        topics: [
          'Jenkins Architecture',
          'Installation Methods',
          'Initial Configuration',
          'Security Setup',
          'Master-Slave Configuration'
        ]
      },
      {
        module: 'Jenkins UI and Configuration',
        topics: [
          'Dashboard Overview',
          'System Configuration',
          'Global Tool Configuration',
          'Plugin Management',
          'User Management and Security'
        ]
      },
      {
        module: 'Creating and Managing Jobs',
        topics: [
          'Freestyle Projects',
          'Build Triggers',
          'Build Steps and Actions',
          'Post-build Actions',
          'Job Configuration Best Practices'
        ]
      },
      {
        module: 'Pipeline as Code (Jenkinsfile)',
        topics: [
          'Declarative vs Scripted Pipelines',
          'Pipeline Syntax',
          'Stages and Steps',
          'Parallel Execution',
          'Pipeline Libraries'
        ]
      },
      {
        module: 'SCM Integration (Git, GitHub)',
        topics: [
          'Git Plugin Configuration',
          'Webhook Setup',
          'Branch Strategies',
          'Pull Request Builds',
          'Multi-branch Pipelines'
        ]
      },
      {
        module: 'Build Tools Integration',
        topics: [
          'Maven Integration',
          'Gradle Integration',
          'NPM and Node.js',
          'Docker Integration',
          'Artifact Management'
        ]
      },
      {
        module: 'Testing and Quality Gates',
        topics: [
          'Unit Test Integration',
          'Code Coverage Reports',
          'Static Code Analysis',
          'Quality Gates with SonarQube',
          'Test Result Publishing'
        ]
      },
      {
        module: 'Deployment Pipelines',
        topics: [
          'Deployment Strategies',
          'Environment Management',
          'Blue-Green Deployments',
          'Canary Releases',
          'Rollback Mechanisms'
        ]
      },
      {
        module: 'Jenkins Plugins',
        topics: [
          'Essential Plugin Overview',
          'Plugin Installation and Management',
          'Custom Plugin Development',
          'Plugin Security Considerations',
          'Plugin Best Practices'
        ]
      },
      {
        module: 'Monitoring and Notifications',
        topics: [
          'Build Monitoring',
          'Email Notifications',
          'Slack Integration',
          'Metrics and Reporting',
          'Performance Optimization'
        ]
      }
    ],
    prerequisites: [
      'Basic understanding of CI/CD',
      'Version control knowledge (Git)',
      'Basic scripting skills'
    ],
    certification: 'Jenkins Engineer Certificate'
  },
  {
    id: 'open-source-voip',
    title: 'Open Source VoIP',
    price: 0,
    duration: '2 weeks',
    level: 'Beginner',
    students: 250,
    instructor: 'Tanzeel Iqbal',
    image: '/images/voip-img.jpg',
    description: 'Learn open source VoIP technologies including Asterisk, FreePBX, and VoIP protocols for telecommunication solutions.',
    features: [
      'Asterisk PBX setup',
      'FreePBX administration',
      'VoIP protocols (SIP, RTP)',
      'Call routing and management',
      'Security implementations',
      'Troubleshooting techniques',
      'Free certification'
    ],
    curriculum: [
      {
        module: 'VoIP Fundamentals',
        topics: [
          'Introduction to VoIP Technology',
          'Traditional vs IP Telephony',
          'VoIP Benefits and Challenges',
          'Network Requirements',
          'Quality of Service (QoS)'
        ]
      },
      {
        module: 'Asterisk Installation and Configuration',
        topics: [
          'Asterisk Architecture',
          'Installation Methods',
          'Configuration Files Overview',
          'Channel Drivers',
          'Module Loading'
        ]
      },
      {
        module: 'FreePBX Setup and Management',
        topics: [
          'FreePBX Installation',
          'Web Interface Overview',
          'Extension Management',
          'Trunk Configuration',
          'System Administration'
        ]
      },
      {
        module: 'SIP Protocol Understanding',
        topics: [
          'SIP Protocol Basics',
          'SIP Messages and Methods',
          'SIP Registration Process',
          'SIP Trunking',
          'SIP Security'
        ]
      },
      {
        module: 'Call Routing and Dialplans',
        topics: [
          'Dialplan Fundamentals',
          'Context and Extensions',
          'Pattern Matching',
          'Call Flow Control',
          'Advanced Routing'
        ]
      },
      {
        module: 'Voice Codecs and Quality',
        topics: [
          'Audio Codecs Overview',
          'Codec Selection Criteria',
          'Bandwidth Considerations',
          'Echo Cancellation',
          'Voice Quality Optimization'
        ]
      },
      {
        module: 'Security and Firewall Configuration',
        topics: [
          'VoIP Security Threats',
          'Firewall Configuration',
          'SIP ALG Issues',
          'Fail2Ban Implementation',
          'Encryption and SRTP'
        ]
      },
      {
        module: 'Monitoring and Troubleshooting',
        topics: [
          'Call Detail Records (CDR)',
          'Log File Analysis',
          'Network Troubleshooting',
          'Performance Monitoring',
          'Common Issues Resolution'
        ]
      },
      {
        module: 'Integration with External Services',
        topics: [
          'PSTN Gateway Integration',
          'SIP Provider Configuration',
          'Database Integration',
          'CRM Integration',
          'API Usage'
        ]
      },
      {
        module: 'Backup and Disaster Recovery',
        topics: [
          'System Backup Strategies',
          'Configuration Backup',
          'Disaster Recovery Planning',
          'High Availability Setup',
          'Redundancy Implementation'
        ]
      }
    ],
    prerequisites: [
      'Basic networking knowledge',
      'Linux command line familiarity'
    ],
    certification: 'Open Source VoIP Certificate',
    isFree: true
  }
];