from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app():
  app = Flask(__name__)
  app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@mysql:3306/nba'
  db.init_app(app)
  with app.app_context():
    db.create_all()
    from .db import init_db
    from .api import api_create
    from .website import website_create
    init_db(db)
    app.register_blueprint(api_create())
    app.register_blueprint(website_create())
    return app