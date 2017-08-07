class LoginController < ApplicationController
  skip_before_action :logged_in # Allow non-authenticated users to access this page

  def index
    render :layout => false
  end

  def create
    status = false
    user = User.find_by(:username => params["username"].downcase) # Make this case insensitive
    if user && user.try(:authenticate, params["password"])
      status = true
      log_in user
    end
    render :json => {:status => status, :url => root_path}
  end

  def logout
    session.delete(:user_id)
    @current_user = nil
    render :json => {:status => false, :url => login_index_path}
  end

end
