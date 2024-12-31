"""Email utility functions."""
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from os import environ

def send_welcome_email(subscriber_email):
    """Send welcome email to new subscribers."""
    msg = MIMEMultipart()
    msg['From'] = environ.get('MAIL_DEFAULT_SENDER')
    msg['To'] = subscriber_email
    msg['Subject'] = 'Welcome to EcoTech Solutions Newsletter!'
    
    body = """
    Thank you for subscribing to our newsletter!
    Stay tuned for the latest updates on green energy innovations.
    """
    msg.attach(MIMEText(body, 'plain'))
    
    # Email sending logic here (configure with your email service)
    pass