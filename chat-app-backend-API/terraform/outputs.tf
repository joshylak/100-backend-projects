output "vpc_id" {
  description = "ID of the VPC"
  value       = aws_vpc.chat_vpc.id
}

output "instance_id" {
  description = "ID of the EC2 instance"
  value       = aws_instance.chat_server.id
}

output "instance_public_ip" {
  description = "Public IP address of the EC2 instance"
  value       = aws_instance.chat_server.public_ip
}

output "load_balancer_dns" {
  description = "DNS name of the load balancer"
  value       = aws_lb.chat_alb.dns_name
}

output "application_url" {
  description = "URL to access the chat application"
  value       = "http://${aws_lb.chat_alb.dns_name}"
}