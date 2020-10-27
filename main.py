def reset():
    global state
    state = []
    for index in range(5):
        state.insert_at(0, Math.random_boolean())
state: List[bool] = []
state = [False, False, False, False, False]
result = [False, False, False, False, False]
line = 0
lca = images.create_image("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """)
reset()