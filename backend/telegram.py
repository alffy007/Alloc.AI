import telebot,sentence


BOT_TOKEN="6495053378:AAEPhQSvkUkqimvJ03lzqbtFngV5V-st6OA"
bot = telebot.TeleBot(BOT_TOKEN)
BOT_USERNAME= "@alloc_ai_bot"

@bot.message_handler(commands=['leave'])
def send_welcome(message):
    value=False
    sentence.sent(value)
    sentence1="leave has been reported to HR"
    bot.reply_to(message,sentence1)
    

@bot.message_handler(commands=['report'])
def send_welcome(message):
    value=True
    sentence.sent(value)
    sentence1="welcome back"
    bot.reply_to(message,sentence1)

@bot.message_handler(commands=['work'])
def send_welcome(message):
    value="Task"
    sentence1=sentence.receive(value)
    bot.reply_to(message,sentence1)

@bot.message_handler(commands=['deadline'])
def send_welcome(message):
    value="DEADLINE"
    sentence1=sentence.receive(value)
    bot.reply_to(message,sentence1)

print("infinite pooling")
bot.infinity_polling()