class LoginController < ApplicationController
  def index
	render :layout => false
  end
  
  def authenticate
	p params
	render :json => params
  end
end
