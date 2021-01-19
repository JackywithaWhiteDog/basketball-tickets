# import pandas as pd
# import numpy as np
# from app import db
# import os 
# dir_path = os.path.dirname(os.path.realpath(__file__))

# class Coach(db.Model):
#     __tablename__ = 'Coach'
#     ID = db.Column(db.Integer, primary_key=True)
#     Name = db.Column(db.String(50), nullable=False)
    
#     def __init__(self, lst):
#         self.ID = lst[0]
#         self.Name = lst[1]
        
        
# class Officiate(db.Model):
#     __tablename__ = 'Officiate'
#     Referee_ID = db.Column(db.Integer, db.ForeignKey('Referee.ID'), primary_key=True, nullable=False)
#     Game_ID = db.Column(db.Integer, db.ForeignKey("Game.ID"), primary_key=True, nullable=False)

#     def __init__(self, lst):
#         self.Referee_ID = lst[0]
#         self.Game_ID = lst[1]
        
    
# class Game(db.Model):
#     __tablename__ = 'Game'
#     ID = db.Column(db.Integer, primary_key=True, nullable=False)
#     Date = db.Column(db.Date, nullable=False)
#     Home_team_ID = db.Column(db.Integer, nullable=False)
#     Away_team_ID = db.Column(db.Integer, nullable=False)
#     Price = db.Column(db.Integer, nullable=False)
    
#     def __init__(self, lst):
#         self.ID = lst[0]
#         self.Date = lst[1]
#         self.Home_team_ID = lst[2]
#         self.Away_team_ID = lst[3]
#         self.Price = lst[4]
        
        
# class Player(db.Model):
#     __tablename__ = 'Player'
#     ID = db.Column(db.Integer, primary_key=True, nullable=False)
#     Name = db.Column(db.String(50), nullable=False)
#     Position = db.Column(db.String(50), nullable=True)
#     Team_ID = db.Column(db.Integer, nullable=False)
#     Age = db.Column(db.Integer, nullable=True)
#     Height = db.Column(db.Float, nullable=True)
#     Weight = db.Column(db.Float, nullable=True)
#     College = db.Column(db.String(50), nullable=True)
#     Draft_Year = db.Column(db.String(50), nullable=True)
#     Draft_Round = db.Column(db.String(50), nullable=True)
#     Draft_Number = db.Column(db.String(50), nullable=True)
    
#     def __init__(self, lst):
#         self.ID = lst[0]
#         self.Name = lst[1]
#         self.Position = lst[2]
#         self.Team_ID = lst[3]
#         self.Age = lst[4]
#         self.Height = lst[5]
#         self.Weight = lst[6]
#         self.College = lst[7]
#         self.Draft_Year = lst[8]
#         self.Draft_Round = lst[9]
#         self.Draft_Number = lst[10]
        
        
# class Like_Game(db.Model):
#     __tablename__ = 'Like_Game'
#     User_ID = db.Column(db.Integer, db.ForeignKey("User.ID"), primary_key=True, nullable=False)
#     Game_ID = db.Column(db.Integer, db.ForeignKey("Game.ID"), primary_key=True, nullable=True)
    
#     def __init__(self, lst):
#         self.User_ID = lst[0]
#         self.Game_ID = lst[1]
    
# class Like_Player(db.Model):
#     __tablename__ = 'Like_Player'
#     User_ID = db.Column(db.Integer, db.ForeignKey("User.ID"), primary_key=True, nullable=False)
#     Player_ID = db.Column(db.Integer, db.ForeignKey("Player.ID"), primary_key=True, nullable=False)
    
#     def __init__(self, lst):
#         self.User_ID = lst[0]
#         self.Player_ID = lst[1]
        
        
# class Like_Team(db.Model):
#     __tablename__ = 'Like_Team'
#     User_ID = db.Column(db.Integer, db.ForeignKey("User.ID"), primary_key=True, nullable=False)
#     Team_ID = db.Column(db.Integer, db.ForeignKey("Team.ID"), primary_key=True, nullable=False)
    
#     def __init__(self, lst):
#         self.User_ID = lst[0]
#         self.Team_ID = lst[1]
        

# class Playin(db.Model):
#     __tablename__ = 'Playin'
#     Player_ID = db.Column(db.Integer, db.ForeignKey("Player.ID"), primary_key=True, nullable = False)
#     Game_ID = db.Column(db.Integer, db.ForeignKey("Game.ID"), primary_key=True, nullable = False)
#     Point = db.Column(db.Integer, nullable=False)

#     def __init__(self, lst):
#         self.Player_ID = lst[0]
#         self.Game_ID = lst[1]
#         self.Point = lst[2]


# class Referee(db.Model):
#     __tablename__ = 'Referee'
#     ID = db.Column(db.Integer, primary_key=True, nullable = False)
#     Name = db.Column(db.String(50))
    
#     def __init__(self, lst):
#         self.ID = lst[0]
#         self.Name = lst[1]


# class Spon_Team(db.Model):
#     __tablename__ = 'Spon_Team'
#     Sponsor_ID = db.Column(db.Integer, db.ForeignKey("Sponsor.ID"), primary_key=True, nullable = False)
#     Team_ID = db.Column(db.Integer, db.ForeignKey("Team.ID"), primary_key=True, nullable = False)

#     def __init__(self, lst):
#         self.Sponsor_ID = lst[0]
#         self.Team_ID = lst[1]


# class Sponsor(db.Model):
#     __tablename__ = 'Sponsor'
#     ID = db.Column(db.Integer, primary_key=True, nullable = False)
#     Name = db.Column(db.String(80))

#     def __init__(self, lst):
#         self.ID = lst[0]
#         self.Name = lst[1]

# class Team(db.Model):
#     __tablename__ = 'Team'
#     ID = db.Column(db.Integer, primary_key=True, nullable = False)
#     Name = db.Column(db.String(80))
#     Court = db.Column(db.String(100))
#     Coach_ID = db.Column(db.Integer, db.ForeignKey("Coach.ID"), primary_key=True, nullable = False)

#     def __init__(self, lst):
#         self.ID = lst[0]
#         self.Name = lst[1]
#         self.Court = lst[2]
#         self.Coach_ID = lst[3]

# class Ticket(db.Model):
#     __tablename__ = 'Ticket'
#     ID = db.Column(db.Integer, primary_key=True, nullable = False)
#     Seat = db.Column(db.String(100), nullable = False)
#     Game_ID = db.Column(db.Integer, db.ForeignKey("Game.ID"), nullable = False)
#     User_ID = db.Column(db.Integer, db.ForeignKey("User.ID"), nullable = True)

#     def __init__(self, lst):
#         self.ID = lst[0]
#         self.Seat = lst[1]
#         self.Game_ID = lst[2]
#         self.User_ID = lst[3]

# class User(db.Model):
#     __tablename__ = 'User'
#     ID = db.Column(db.Integer, primary_key=True, nullable = False)
#     Name = db.Column(db.String(100))
#     Account = db.Column(db.String(100), nullable = False)
#     Passward = db.Column(db.String(100), nullable = True)

#     def __init__(self, lst):
#         self.ID = lst[0]
#         self.Name = lst[1]
#         self.Account = lst[2]
#         self.Passward = lst[3]

# def inputData(table, className):
#     inputList = []
#     for i in range(len(table)):
#         tmp = table.iloc[i, :].to_list()
#         for i in range(len(tmp)):
#             if type(tmp[i]) == np.int64:
#                 tmp[i] = int(tmp[i])
#             elif type(tmp[i]) == np.float64:
#                 tmp[i] = float(tmp[i])
#         item = className(tmp)
#         inputList.append(item)
#     return inputList

# player = pd.read_csv(os.path.join(dir_path,"./datasets/Player.csv"))
# player = player.where(pd.notnull(player), None)
# coach = pd.read_csv(os.path.join(dir_path,"./datasets/Coach.csv"))
# game = pd.read_csv(os.path.join(dir_path,"./datasets/Game.csv"))
# sponsor = pd.read_csv(os.path.join(dir_path,"./datasets/Sponsor.csv"))
# referee = pd.read_csv(os.path.join(dir_path,"./datasets/Referee.csv"))
# officiate = pd.read_csv(os.path.join(dir_path,"./datasets/Officiate.csv"))
# team = pd.read_csv(os.path.join(dir_path,"./datasets/Team.csv"))
# playin = pd.read_csv(os.path.join(dir_path,"./datasets/Playin.csv"))
# user = pd.read_csv(os.path.join(dir_path,"./datasets/User.csv"))
# user = user.where(pd.notnull(user), None)
# ticket = pd.read_csv(os.path.join(dir_path,"./datasets/Ticket.csv"))
# ticket = ticket.where(pd.notnull(ticket), None)
# spon_team = pd.read_csv(os.path.join(dir_path,"./datasets/Spon_Team.csv"))
# player_in = inputData(player, Player)
# coach_in = inputData(coach, Coach)
# game_in = inputData(game, Game)
# sponsor_in = inputData(sponsor, Sponsor)
# referee_in = inputData(referee, Referee)
# officiate_in = inputData(officiate, Officiate)
# team_in = inputData(team, Team)
# playin_in = inputData(playin, Playin)
# user_in = inputData(user, User)
# ticket_in = inputData(ticket, Ticket)
# spon_team_in = inputData(spon_team, Spon_Team)

# insertData = [
#     coach_in,
#     user_in,
#     sponsor_in,
#     player_in,
#     game_in,
#     referee_in,
#     team_in,
#     officiate_in,
#     playin_in,
#     ticket_in,
#     spon_team_in
# ]
