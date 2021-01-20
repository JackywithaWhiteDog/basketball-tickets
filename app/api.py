from flask import Flask, blueprints, Response, request
from sqlalchemy import create_engine, insert, select
import json

engine = create_engine('mysql+pymysql://root:root@mysql:3306/nba')

def api_create():
  api = blueprints.Blueprint('api',
                             __name__,
                             url_prefix='/api')

  @api.route('/signup', methods=['POST'])
  def signup():
    from app.request import register
    try:
      payload = {
        'Name': request.args['name'],
        'AccountName': request.args['account'],
        'Password': request.args['password']
      }
    except:
        return 'Bad Request', 400

    if register(payload):
      res = {
        'code': 200,
      }
      return Response(json.dumps(res), mimetype='application/json')
    return 'Bad Request', 400

  @api.route('/login', methods=['POST'])
  def login():
    from app.request import login
    try:
      payload = {
        'AccountName': request.args['account'],
        'Password': request.args['password']
      }
    except:
        return 'Bad Request', 400
    result = login(payload)
    if result is not None:
      res = result
      res['code'] = 200
      return Response(json.dumps(res), mimetype='application/json')
    res = {
      'code': 401,
      'err': 'Account and password not matched'
    }
    return Response(json.dumps(res), mimetype='application/json')

  @api.route('/menu', methods=['GET', 'POST'])
  def menu():
    from app.request import get_menu
    try:
      table = request.args['table']
    except:
      print(request.args)
      return 'Bad Request', 400
    if table not in ['player', 'team', 'game']:
      print(table)
      return 'Bad Request', 400
    res = get_menu(table)
    res['code'] = 200
    return Response(json.dumps(res), mimetype='application/json')

  @api.route('/data', methods=['GET', 'POST'])
  def data():
    from app.request import req
    try:
      payload = {
        'table': request.args['table'],
        'query': json.loads(request.args['query'])
      }
    except:
        return 'Bad Request', 400
    if payload['table'] not in ['player', 'team', 'game', 'viewTicket', 'buyTicket', 'refundTicket', 'getTicketData']:
      return 'Bad Request', 400
    print(payload)
    res = req(payload)
    res['code'] = 200
    # print(type(res))
    # print(type(res['Data']))
    # print(type(res['Data'][0]))
    # print(type(res['Data'][0][1]))
    print(res)
    return Response(json.dumps(res), mimetype='application/json')

  return api