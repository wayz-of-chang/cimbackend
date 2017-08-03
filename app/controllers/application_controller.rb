class ApplicationController < ActionController::Base
	protect_from_forgery with: :exception
	before_action :logged_in
	include LoginHelper
	def index
		render :layout => false
	end
end
