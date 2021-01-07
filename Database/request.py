from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.dialects.mysql.base import LONGTEXT
import pandas as pd
import numpy as np

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://root:x19700911X@localhost:3306/nba"

db = SQLAlchemy(app)
db.init_app(app)

engine = create_engine('mysql+pymysql://root:x19700911X@localhost:3306/nba')
    
class Coach(db.Model):
    __tablename__ = 'Coach'
    ID = db.Column(db.Integer, primary_key=True)
    Name = db.Column(db.String(50), nullable=False)
    
    def __init__(self, lst):
        self.ID = lst[0]
        self.Name = lst[1]
        
        
class Officiate(db.Model):
    __tablename__ = 'Officiate'
    Referee_ID = db.Column(db.Integer, db.ForeignKey('Referee.ID'), primary_key=True, nullable=False)
    Game_ID = db.Column(db.Integer, db.ForeignKey("Game.ID"), primary_key=True, nullable=False)

    def __init__(self, lst):
        self.Referee_ID = lst[0]
        self.Game_ID = lst[1]
        
    
class Game(db.Model):
    __tablename__ = 'Game'
    ID = db.Column(db.Integer, primary_key=True, nullable=False)
    Date = db.Column(db.Date, nullable=False)
    Home_team_ID = db.Column(db.Integer, nullable=False)
    Away_team_ID = db.Column(db.Integer, nullable=False)
    Price = db.Column(db.Integer, nullable=False)
    
    def __init__(self, lst):
        self.ID = lst[0]
        self.Date = lst[1]
        self.Home_team_ID = lst[2]
        self.Away_team_ID = lst[3]
        self.Price = lst[4]
        
        
class Player(db.Model):
    __tablename__ = 'Player'
    ID = db.Column(db.Integer, primary_key=True, nullable=False)
    Name = db.Column(db.String(50), nullable=False)
    Position = db.Column(db.String(50), nullable=True)
    Team_ID = db.Column(db.Integer, nullable=False)
    Age = db.Column(db.Integer, nullable=True)
    Height = db.Column(db.Float, nullable=True)
    Weight = db.Column(db.Float, nullable=True)
    College = db.Column(db.String(50), nullable=True)
    Draft_Year = db.Column(db.String(50), nullable=True)
    Draft_Round = db.Column(db.String(50), nullable=True)
    Draft_Number = db.Column(db.String(50), nullable=True)
    
    def __init__(self, lst):
        self.ID = lst[0]
        self.Name = lst[1]
        self.Position = lst[2]
        self.Team_ID = lst[3]
        self.Age = lst[4]
        self.Height = lst[5]
        self.Weight = lst[6]
        self.College = lst[7]
        self.Draft_Year = lst[8]
        self.Draft_Round = lst[9]
        self.Draft_Number = lst[10]
        
        
class Like_Game(db.Model):
    __tablename__ = 'Like_Game'
    User_ID = db.Column(db.Integer, db.ForeignKey("User.ID"), primary_key=True, nullable=False)
    Game_ID = db.Column(db.Integer, db.ForeignKey("Game.ID"), primary_key=True, nullable=True)
    
    def __init__(self, lst):
        self.User_ID = lst[0]
        self.Game_ID = lst[1]
    
class Like_Player(db.Model):
    __tablename__ = 'Like_Player'
    User_ID = db.Column(db.Integer, db.ForeignKey("User.ID"), primary_key=True, nullable=False)
    Player_ID = db.Column(db.Integer, db.ForeignKey("Player.ID"), primary_key=True, nullable=False)
    
    def __init__(self, lst):
        self.User_ID = lst[0]
        self.Player_ID = lst[1]
        
        
class Like_Team(db.Model):
    __tablename__ = 'Like_Team'
    User_ID = db.Column(db.Integer, db.ForeignKey("User.ID"), primary_key=True, nullable=False)
    Team_ID = db.Column(db.Integer, db.ForeignKey("Team.ID"), primary_key=True, nullable=False)
    
    def __init__(self, lst):
        self.User_ID = lst[0]
        self.Team_ID = lst[1]
        

class Playin(db.Model):
    __tablename__ = 'Playin'
    Player_ID = db.Column(db.Integer, db.ForeignKey("Player.ID"), primary_key=True, nullable = False)
    Game_ID = db.Column(db.Integer, db.ForeignKey("Game.ID"), primary_key=True, nullable = False)
    Point = db.Column(db.Integer, nullable=False)

    def __init__(self, lst):
        self.Player_ID = lst[0]
        self.Game_ID = lst[1]
        self.Point = lst[2]


class Referee(db.Model):
    __tablename__ = 'Referee'
    ID = db.Column(db.Integer, primary_key=True, nullable = False)
    Name = db.Column(db.String(50))
    
    def __init__(self, lst):
        self.ID = lst[0]
        self.Name = lst[1]


class Spon_Team(db.Model):
    __tablename__ = 'Spon_Team'
    Sponsor_ID = db.Column(db.Integer, db.ForeignKey("Sponsor.ID"), primary_key=True, nullable = False)
    Team_ID = db.Column(db.Integer, db.ForeignKey("Team.ID"), primary_key=True, nullable = False)

    def __init__(self, lst):
        self.Sponsor_ID = lst[0]
        self.Team_ID = lst[1]


class Sponsor(db.Model):
    __tablename__ = 'Sponsor'
    ID = db.Column(db.Integer, primary_key=True, nullable = False)
    Name = db.Column(db.String(80))

    def __init__(self, lst):
        self.ID = lst[0]
        self.Name = lst[1]

class Team(db.Model):
    __tablename__ = 'Team'
    ID = db.Column(db.Integer, primary_key=True, nullable = False)
    Name = db.Column(db.String(80))
    Court = db.Column(db.String(100))
    Coach_ID = db.Column(db.Integer, db.ForeignKey("Coach.ID"), primary_key=True, nullable = False)

    def __init__(self, lst):
        self.ID = lst[0]
        self.Name = lst[1]
        self.Court = lst[2]
        self.Coach_ID = lst[3]

class Ticket(db.Model):
    __tablename__ = 'Ticket'
    ID = db.Column(db.Integer, primary_key=True, nullable = False)
    Seat = db.Column(db.String(100), nullable = False)
    Game_ID = db.Column(db.Integer, db.ForeignKey("Game.ID"), nullable = False)
    User_ID = db.Column(db.Integer, db.ForeignKey("User.ID"), nullable = True)

    def __init__(self, lst):
        self.ID = lst[0]
        self.Seat = lst[1]
        self.Game_ID = lst[2]
        self.User_ID = lst[3]

class User(db.Model):
    __tablename__ = 'User'
    ID = db.Column(db.Integer, primary_key=True, nullable = False)
    Name = db.Column(db.String(100))
    Account = db.Column(db.String(100), nullable = False)
    Passward = db.Column(db.String(100), nullable = True)

    def __init__(self, lst):
        self.ID = lst[0]
        self.Name = lst[1]
        self.Account = lst[2]
        self.Passward = lst[3]

def inputData(table, className):
    inputList = []
    for i in range(len(table)):
        tmp = table.iloc[i, :].to_list()
        for i in range(len(tmp)):
            if type(tmp[i]) == np.int64:
                tmp[i] = int(tmp[i])
            elif type(tmp[i]) == np.float64:
                tmp[i] = float(tmp[i])
        item = className(tmp)
        inputList.append(item)
    return inputList



def get_player_menu():
    menu = {}
    #Column
    menu['Column'] = {'ID': 'ID',
                    'Name': 'Name',
                    'Position': 'Position',
                    'Team_ID': 'Team_ID',
                    'Age': 'Age',
                    'Height': 'Height',
                    'Weight': 'Weight',
                    'College': 'College',
                    'Draft_Year': 'Draft_Year',
                    'Draft_Round': 'Draft_Round',
                    'Draft_Number': 'Draft_Number'}
    #Position
    menu['Position'] = {'PG': 'PG',
                    'SG': 'SG',
                    'SF': 'SF',
                    'PF': 'PF',
                    'C': 'C'}
    #Team
    team_tmp = {}
    with engine.connect() as con:
        rs = con.execute('SELECT Name, ID FROM Team')
        for row in rs:
            team_tmp[str(row.ID)] = row.Name

    menu['Team'] = team_tmp

    #Order_by
    menu['Order_by'] = {'ID': 'ID',
                    'Name': 'Name',
                    'Age': 'Age',
                    'Height': 'Height',
                    'Weight': 'Weight',
                    'Draft_Year': 'Draft_Year'}
    return menu
    
def get_team_menu():
    menu = {}
    #Column
    menu['Column'] = {'ID': 'ID',
                    'Name': 'Name',
                    'Court': 'Court',
                    'Coach_ID': 'Coach_ID'}

    #Order_by
    menu['Order_by'] = {'ID': 'ID',
                    'Name': 'Name',
                    'Court': 'Court',
                    'Coach_ID': 'Coach_ID'}
    return menu
    
def get_game_menu():
    menu = {}
    #Column
    menu['Column'] = {'ID': 'ID',
                    'Date': 'Date',
                    'Home_team_ID': 'Home_team_ID',
                    'Away_team_ID': 'Away_team_ID',
                    'Price': 'Price'}
        
    #Date
    date_tmp = {}
    with engine.connect() as con:
        rs = con.execute('SELECT Date FROM Game')
        for row in rs:
            home_team_tmp[row.Date] = row.Date

    menu['Date'] = date_tmp

    #Home_team_ID
    home_team_tmp = {}
    with engine.connect() as con:
        rs = con.execute('SELECT Name, ID FROM Team')
        for row in rs:
            home_team_tmp[str(row.ID)] = row.Name

    menu['Home_team_ID'] = home_team_tmp

    #Away_team_ID
    away_team_tmp = {}
    with engine.connect() as con:
        rs = con.execute('SELECT Name, ID FROM Team')
        for row in rs:
            away_team_tmp[str(row.ID)] = row.Name

    menu['Away_team_ID'] = away_team_tmp


    #Order_by
    menu['Order_by'] = {'ID': 'ID',
                    'Date': 'Date',
                    'Home_team_ID': 'Home_team_ID',
                    'Away_team_ID': 'Away_team_ID',
                    'Price': 'Price'}
    return menu

def menu(page_name):
    if (page_name == 'Player'):
        menu = get_player_menu()
        ###傳menu
        #Player

    elif (page_name == 'Team'):
        menu = get_team_menu()
        ###傳menu
    elif (page_name == 'Game'):
        menu = get_game_menu()
        ###傳menu
    
        
def req(request):
    if request['table'] == 'Player':
        col_name = []
        sql = ' FROM Player'
        if request['query']['Column'] == 'All':
            sql = 'SELECT *' + sql
            col_name = ['ID', 'Name', 'Position', 'Team_ID', 'Age', 'Height', 'Weight', 'College', 'Draft_Year', 'Draft_Round', 'Draft_Number']
        else:
            sql = 'SELECT ' + request['query']['Column'] + sql
            col_name.append(request['query']['Column'])
        if request['query']['Position'] != 'All' and request['query']['Team'] != 'All':
            sql = sql + ' WHERE Position="' + request['query']['Position'] + '" AND Team_ID='+ request['query']['Team']
        elif request['query']['Position'] != 'All':
            sql = sql + ' WHERE Position="' + request['query']['Position'] +'"'
        elif request['query']['Team'] != 'All':
            sql = sql + ' WHERE Team_ID='+ request['query']['Team']
        sql = sql + ' ORDER BY ' + request['query']['Order_by']
        
        with engine.connect() as con:
            sql_get = con.execute(sql)
            table = []
            for t in sql_get:
                table.append(t)

        to_return = {'Column_names': col_name, #list
                'Data': table}
        return to_return
        
    elif request['table'] == 'Team':
        col_name = []
        sql = ' FROM Team'
        if request['query']['Column'] == 'All':
            sql = 'SELECT *' + sql
            col_name = ['ID', 'Name', 'Court', 'Coach_ID']
        else:
            sql = 'SELECT ' + request['query']['Column'] + sql
            col_name.append(request['query']['Column'])
        sql = sql + ' ORDER BY ' + request['query']['Order_by']

        with engine.connect() as con:
            sql_get = con.execute(sql)
            table = []
            for t in sql_get:
                table.append(t)

        to_return = {'Column_names': col_name, #list
                'Data': table}
        return to_return

    elif request['table'] == 'Game':
        col_name = []
        sql = ' FROM Game'
        if request['query']['Column'] == 'All':
            sql = 'SELECT *' + sql
            col_name = ['ID', 'Date', 'Home_team_ID', 'Away_team_ID', 'Price']
        else:
            sql = 'SELECT ' + request['query']['Column'] + sql
            col_name.append(request['query']['Column'])

        strs = []
        if request['query']['Date'] != 'All':
            strs.append('Date="' + request['query']['Date'] + '"')
        if request['query']['Home_team'] != 'All':
            strs.append('Home_team_ID=' + request['query']['Home_team'])
        if request['query']['Away_team'] !='All':
            strs.append('Away_team_ID=' + request['query']['Away_team'])
        if len(strs) == 3:
            sql = sql + ' WHERE ' + strs[0] + ' AND ' + strs[1] + ' AND ' + strs[2]
        elif len(strs) == 2:
            sql = sql + ' WHERE ' + strs[0] + ' AND ' + strs[1]
        elif len(strs) == 1:
            sql = sql + ' WHERE ' + strs[0]
        sql = sql + ' ORDER BY ' + request['query']['Order_by']

        with engine.connect() as con:
            sql_get = con.execute(sql)
            table = []
            for t in sql_get:
                table.append(t)

        to_return = {'Column_names': col_name, #list
                'Data': table}
        return to_return

########### demo example ############
# request_player = {'table': 'Player',
#         'query': {'Column': 'Name', #display
#                 'Position': 'C', #Position
#                 'Team': '1610612738', #Team
#                 'Order_by': 'Name'} #Sort
# }

# request_team = {'table': 'Team',
#         'query': {'Column': 'All', #display
#                 'Order_by': 'Name'} #Sort
# }

# request_game = {'table': 'Game',
#         'query': {'Column': 'All', #display
#                 'Date': '2020/8/22',
#                 'Home_team': 'All',
#                 'Away_team': 'All',
#                 'Order_by': 'Date'} #Sort
# }

# tmp = req(request_game)
# print(tmp['Data'])