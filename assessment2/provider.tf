terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.10.0"
    }
  }

}

provider "aws" {
  alias  = "aws_southeast1"
  region = "ap-southeast-1"

}