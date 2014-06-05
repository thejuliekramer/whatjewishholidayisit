require 'sinatra'

	get "/" do
		 send_file File.expand_path('whatjewishholidayistoday.html', settings.public_folder)
	end


	