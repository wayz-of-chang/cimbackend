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

  def logout
    session.delete(:user_id)
    @current_user = nil
    render :json => {status => false}
  end

end
