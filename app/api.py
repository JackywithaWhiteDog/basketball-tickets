from flask import Flask, blueprints, Response, request
import json

def api_create():
  api = blueprints.Blueprint('api',
                             __name__,
                             url_prefix='/api')

  @api.route('/signup', methods=['POST'])
  def signup():
    res = {
      'code': 200,
    }
    return Response(json.dumps(res), mimetype='application/json')

  @api.route('/login', methods=['POST'])
  def login():
    res = {
      'code': 200,
    }
    return Response(json.dumps(res), mimetype='application/json')

  return api