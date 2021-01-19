from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def init_db():
  pass
  # from .models import insertData
  # db.create_all()
  # for iD in insertData:
  #   db.session.add_all(iD)
  #   db.session.commit()


def create_app():
  app = Flask(__name__)
  app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
  app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@mysql:3306/nba'
  db.init_app(app)
  with app.app_context():
    init_db()
    from .api import api_create
    # from .website import website_create
    app.register_blueprint(api_create())
    # app.register_blueprint(website_create())
    return app