from flask import Flask, blueprints, render_template

def website_create():

  website = blueprints.Blueprint('website',
                                 __name__,
                                 url_prefix='/',
                                 static_folder = "./dist/static",
                                 template_folder = "./dist")
  @website.route('/')
  def index():
    return render_template("index.html")

  return website