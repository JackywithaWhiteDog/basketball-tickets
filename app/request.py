from sqlalchemy import create_engine

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
    date_tmp = {}
    with engine.connect() as con:
        rs = con.execute('SELECT Date FROM Game')
        for row in rs:
            date_tmp[row.Date] = row.Date

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
    if request['table'] == 'player':
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
        
    elif request['table'] == 'team':
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

    elif request['table'] == 'game':
        col_name = []
        sql = ' FROM Game'
        if request['query']['Column'] == 'All':
            sql = 'SELECT *' + sql
            col_name = ['ID', 'Date', 'Home_team_ID', 'Away_team_ID', 'Price']
        else:
            sql = 'SELECT ' + request['query']['Column'] + sql
            col_name.append(request['query']['Column'])

        strs = []
        if request['query']['date'] != 'All':
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