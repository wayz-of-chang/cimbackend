require 'test_helper'

class DirectoryControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get directory_index_url
    assert_response :success
  end

end
