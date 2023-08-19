
from typing import Final 
from telegram import Update
from telegram.ext import Application, CommandHandler, CallbackContext,MessageHandler,filters,ContextTypes


TOKEN:Final ="6495053378:AAEPhQSvkUkqimvJ03lzqbtFngV5V-st6OA"
BOT_USERNAME:Final = "@alloc_ai_bot"

async def start_command (update: Update, context: ContextTypes. DEFAULT_TYPE):
    await update.message.reply_text("Hello!I am here to assign you with your tasks!and clear all your doubts!")


if __name__ == '_main_' :
    print("Bot started")
    app = Application.builder(). token (TOKEN) .build()
    app.add_handter (CommandHandler('start', start_command))
    