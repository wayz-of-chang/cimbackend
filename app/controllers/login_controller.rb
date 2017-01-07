class LoginController < ApplicationController
  def index
	render :layout => false
  end
  
  def authenticate
	status = false
	if User.find_by(:username => params["username"]).try(:authenticate, params["password"])
		status = true
	end
	render :json => {:status => status}
  end
end
