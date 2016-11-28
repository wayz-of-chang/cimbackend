# [START app]
import logging

from flask import Flask, render_template, request
app = Flask(__name__)
app.config['DEBUG'] = True

# Note: We don't need to call run() since our application is embedded within
# the App Engine WSGI application server.


@app.route('/hello')
def hello():
    """Return a friendly HTTP greeting."""
    return 'Hello World!'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/service', methods=['POST'])
def service():
    return render_template('service.html')

@app.route('/login', methods=['POST'])
def login():
    return render_template('login.html')

@app.route('/submitted', methods=['POST'])
def submitted_form():
    name = request.form['name']
    email = request.form['email']
    comments = request.form['comments']
    return render_template('submitted_form.html',
        site = request.form['site_url'],
        name=name,
        email=email,
        comments=comments
    )

@app.errorhandler(404)
def page_not_found(e):
    """Return a custom 404 error."""
    return 'Sorry, nothing at this URL.', 404

@app.errorhandler(500)
def server_error(e):
    """Return a custom 404 error."""
    logging.exception('An error occurred during a request.')
    return 'An internal error occurred.', 500
# [END app]