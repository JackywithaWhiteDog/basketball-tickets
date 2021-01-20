from sqlalchemy import create_engine
from datetime import date

engine = create_engine('mysql+pymysql://root:root@mysql:3306/nba')

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
    # date_tmp = {}
    # with engine.connect() as con:
    #     rs = con.execute('SELECT Date FROM Game')
    #     for row in rs:
    #         date_tmp[row.Date] = row.Date

    # menu['Date'] = date_tmp

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

def get_menu(page_name):
  if (page_name == 'player'):
    return get_player_menu()
    ###傳menu
    #Player
  elif (page_name == 'team'):
    return get_team_menu()
    ###傳menu
  elif (page_name == 'game'):
    return get_game_menu()
    ###傳menu
  return {}
    
        
def req(request):
    print(request)
    if request['table'] == 'player':
        col_name = []
        sql = ' FROM Player p INNER JOIN Team t ON p.Team_ID = t.ID  '
        if request['query']['Column'] == 'All':
            sql = 'SELECT p.ID, p.Name, p.Position, t.Name, p.Age, p.Height, p.Weight, p.College, p.Draft_Year, p.Draft_Round, p.Draft_Number' + sql
            col_name = ['ID', 'Name', 'Position', 'Team', 'Age', 'Height', 'Weight', 'College', 'Draft_Year', 'Draft_Round', 'Draft_Number']
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
                table.append(list(t))

        to_return = {'Column_names': col_name, #list
                'Data': table}
        return to_return
        
    elif request['table'] == 'team':
        col_name = []
        sql = ' FROM Team t INNER JOIN Coach c ON t.Coach_ID = c.ID  '
        if request['query']['Column'] == 'All':
            sql = 'SELECT t.ID, t.Name, t.Court, c.Name' + sql
            col_name = ['ID', 'Name', 'Court', 'Coach']
        else:
            sql = 'SELECT ' + request['query']['Column'] + sql
            col_name.append(request['query']['Column'])
        sql = sql + ' ORDER BY ' + request['query']['Order_by']

        with engine.connect() as con:
            sql_get = con.execute(sql)
            table = []
            for t in sql_get:
                table.append(list(t))

        to_return = {'Column_names': col_name, #list
                'Data': table}
        return to_return

    elif request['table'] == 'game':
        col_name = []
        sql = ' FROM Game g INNER JOIN Team ht ON g.Home_team_ID=ht.ID INNER JOIN Team at ON g.Away_team_ID=at.ID INNER JOIN Coach c ON ht.Coach_ID = c.ID  '
        if request['query']['Column'] == 'All':
            sql = 'SELECT g.ID, g.Date, c.Name, ht.Name, at.Name, g.Price' + sql
            col_name = ['ID', 'Date', 'Court', 'Home_team', 'Away_team', 'Price']
        else:
            sql = 'SELECT ' + request['query']['Column'] + sql
            col_name.append(request['query']['Column'])

        strs = []
        # if request['query']['date'] != 'All':
        #     strs.append('Date="' + request['query']['Date'] + '"')
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

        table = []
        with engine.connect() as con:
            sql_get = con.execute(sql)
            for t in sql_get:
                table.append([item if type(item) != date else item.strftime('%Y/%m/%d') for item in t])

        to_return = {'Column_names': col_name, #list
                'Data': table}
        return to_return


    elif request['table'] == 'getTicketData':
        sql = "SELECT Seat, Count(*) FROM Ticket WHERE Game_ID='"
        sql += str(request['query']['Game_ID']) + "' and User_ID is NULL GROUP BY Seat;"
        col_name = ["Seat", "Available_num"]

        with engine.connect() as con:
            sql_get = con.execute(sql)
            table = []
            for t in sql_get:
                table.append(list(t))

        to_return = {'Column_names': col_name, #list
                'Data': table}
        return to_return

    elif request['table'] == 'viewTicket':
        sql = """
                SELECT tk.ID, g.ID, g.Date, c.Name, tk.Seat, ht.Name, at.Name, g.Price 
                FROM Ticket tk INNER JOIN Game g ON tk.Game_ID=g.ID INNER JOIN Team ht ON g.Home_team_ID=ht.ID INNER JOIN Team at ON g.Away_team_ID=at.ID INNER JOIN Coach c ON ht.Coach_ID = c.ID  
                WHERE User_ID='
              """
        sql += str(request['query']['User_ID']) + "';"
        col_name = ["Ticket_ID", "Game_ID", 'Date', 'Court', "Seat", 'Home_team', 'Away_team', 'Price']

        with engine.connect() as con:
            sql_get = con.execute(sql)
            table = []
            for t in sql_get:
                table.append([item if type(item) != date else item.strftime('%Y/%m/%d') for item in t])

        to_return = {'Column_names': col_name, #list
                'Data': table}
        return to_return

    elif request['table'] == 'buyTicket':
        sql = f"UPDATE Ticket SET User_ID='{request['query']['User_ID']}' WHERE Game_ID={request['query']['Game_ID']} AND User_ID is NULL limit 1;"
        with engine.connect() as con:
            sql_get = con.execute(sql)
        return {}

    elif request['table'] == 'refundTicket':
        sql = "UPDATE Ticket SET User_ID=NULL WHERE ID='" + str(request['query']['Ticket_ID']) + "';"
        with engine.connect() as con:
            sql_get = con.execute(sql)
            
        return {}

    elif request['table'] == 'sql':
        col = []
        with engine.connect() as con:
            sql_get = con.execute(request['query']['Text'])
            for v in sql_get:
                print(v.items())
                col = v.keys()
                print(v.keys())
                break
        if 'select' in request['query']['Text'].lower():
            table = []
            for t in sql_get:
                table.append([item if type(item) != date else item.strftime('%Y/%m/%d') for item in t])
            to_return = {'Column_names': list(col), #list
                         'Data': table}
            return to_return
        to_return = {
            'Column_names': [], #list
            'Data': []
        }
        return to_return


def register(user_info):
    with engine.connect() as con:
        sql_get = con.execute("SELECT COUNT(*) FROM User;")
        table = []
        for t in sql_get:
            table.append(list(t))

    ID = 2021000 + table[0][0]

    sql = "INSERT INTO User (ID, Name, Account, Passward) VALUES ("
    sql += str(ID) + ", '" + user_info['Name'] + "', '" + user_info['AccountName']
    sql += "', '" + user_info['Password'] + "');"

    with engine.connect() as con:
        con.execute(sql)
        #sql_get = con.execute(sql)
        # table = []
        # for t in sql_get:
        #     table.append(t)
    return True

def login(login_info):
    sql = "SELECT ID, Name, Admin, Passward FROM User WHERE Account='" + login_info['AccountName'] + "';"
    with engine.connect() as con:
        sql_get = con.execute(sql)
        table = []
        for t in sql_get:
            table.append(list(t))

    if len(table) > 0 and login_info['Password'] == table[0][3]:
        # return table[0][0] #it is user ID.
        return {
            'token': table[0][0],
            'name': table[0][1],
            'admin': table[0][2]
        }
    else:
        return None