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
    try:
      name = request.args['name']
      account = request.args['account']
      password = request.args['password']
    except:
        return 'Bad Request', 400

    with engine.connect() as connection:
      with connection.begin():
        connection.execute(insert('User').
                           values(Name=name,
                                  Account=account,
                                  Password=password))

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
    with engine.connect() as connection:
      result = connection.execute(f"select * from User where account='{account}' and password='{password}'")
    cnt = 0
    for row in result:
      cnt += 1
      break
    if cnt > 0:
      res = {
        'code': 200,
      }
      return Response(json.dumps(res), mimetype='application/json')
    res = {
      'code': 401
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
    if payload['table'] not in ['player', 'team', 'game']:
      return 'Bad Request', 400
    res = req(payload)
    res['code'] = 200
    print(res['Data'][0])
    return Response(json.dumps(res), mimetype='application/json')

  return api