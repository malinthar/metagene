from flask import Flask
import controller
app=controller.create_app()

if(__name__)=='__main__':
    app.run(debug=True)
