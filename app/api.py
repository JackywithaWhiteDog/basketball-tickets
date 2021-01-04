from flask import Flask, blueprints, Response, request
import json

def api_create():
  api = blueprints.Blueprint('api',
                             __name__,
                             url_prefix='/api')

  @api.route('/signup', methods=['POST'])
  def signup():
    try:
      name = request.args['name']
      account = request.args['account']
      password = request.args['password']
    except:
        return 'Bad Request', 400

    res = {
      'code': 200,
    }
    return Response(json.dumps(res), mimetype='application/json')

  @api.route('/login', methods=['POST'])
  def login():
    try:
      account = request.args['account']
      password = request.args['password']
    except:
        return 'Bad Request', 400

    res = {
      'code': 200,
    }
    return Response(json.dumps(res), mimetype='application/json')

  return api