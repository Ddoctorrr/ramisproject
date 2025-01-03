"""Application configuration."""
from os import environ, path
from dotenv import load_dotenv

basedir = path.abspath(path.dirname(__file__))
load_dotenv(path.join(basedir, '.env'))

class Config:
    """Base config."""
    SECRET_KEY = environ.get('SECRET_KEY', 'dev')
    SQLALCHEMY_DATABASE_URI = environ.get('DATABASE_URL', 'sqlite:///ecotech.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False