module LoginHelper

  # Logs in the given user.
  def log_in(user)
    session[:user_id] = user.id
  end

  def valid_user
    return @current_user ||= User.find_by(id: session[:user_id])
  end

  # Function to lock down pages
  def logged_in
    unless valid_user
      redirect_to login_index_path
    end
  end
end
