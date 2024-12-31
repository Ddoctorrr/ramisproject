from flask import Flask, render_template, request, jsonify
from modules.newsletter import newsletter_bp
from modules.news import news_bp
from modules.contact import contact_bp
from modules.technologies import technologies_bp

app = Flask(__name__)

# Register blueprints
app.register_blueprint(newsletter_bp)
app.register_blueprint(news_bp)
app.register_blueprint(contact_bp)
app.register_blueprint(technologies_bp)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True)