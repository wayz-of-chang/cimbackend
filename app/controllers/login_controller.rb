class LoginController < ApplicationController
  def index
    render :layout => false
  end

  def authenticate
    status = false
    user = User.find_by(:username => params["username"].downcase) # Make this case insensitive
    if user && user.try(:authenticate, params["password"])
        status = true
        log_in user
    end
    render :json => {:status => status}
  end
end
