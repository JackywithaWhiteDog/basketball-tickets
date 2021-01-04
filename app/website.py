from flask import Flask, blueprints, render_template, send_from_directory

def website_create():

  website = blueprints.Blueprint('website',
                                 __name__,
                                 url_prefix='/website',
                                 static_folder = "dist/static",
                                 template_folder = "dist")
  @website.route('/')
  def index():
    return render_template("index.html")

  # @website.route("/static/<path:path>")
  # def static_dir(path):
  #     return send_from_directory("dist/static", path)

  return website