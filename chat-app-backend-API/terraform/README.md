# Chat App Backend - Terraform Infrastructure

This Terraform configuration deploys the Chat App Backend to AWS with the following resources:

## Resources Created

- **VPC** with public subnet
- **EC2 instance** running Amazon Linux 2
- **Application Load Balancer** for high availability
- **Security Group** with appropriate ports (80, 5000, 22)
- **Internet Gateway** and routing

## Prerequisites

1. AWS CLI configured with appropriate credentials
2. Terraform installed (>= 1.0)
3. AWS Key Pair created for EC2 access

## Deployment

1. Copy the example variables file:
   ```bash
   cp terraform.tfvars.example terraform.tfvars
   ```

2. Edit `terraform.tfvars` with your values:
   ```hcl
   aws_region    = "us-east-1"
   app_name      = "chat-app"
   instance_type = "t3.micro"
   key_name      = "your-key-pair-name"
   ```

3. Initialize Terraform:
   ```bash
   terraform init
   ```

4. Plan the deployment:
   ```bash
   terraform plan
   ```

5. Apply the configuration:
   ```bash
   terraform apply
   ```

## Accessing the Application

After deployment, access the chat application using the load balancer DNS name provided in the output.

## Cleanup

To destroy the infrastructure:
```bash
terraform destroy
```

## Architecture

- Single EC2 instance in public subnet
- Application Load Balancer for external access
- WebSocket support for real-time chat functionality
- Automatic application deployment via user data script