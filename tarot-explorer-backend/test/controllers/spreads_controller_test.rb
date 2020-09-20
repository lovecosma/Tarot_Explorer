require 'test_helper'

class SpreadsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @spread = spreads(:one)
  end

  test "should get index" do
    get spreads_url, as: :json
    assert_response :success
  end

  test "should create spread" do
    assert_difference('Spread.count') do
      post spreads_url, params: { spread: { query: @spread.query, spread_type: @spread.spread_type } }, as: :json
    end

    assert_response 201
  end

  test "should show spread" do
    get spread_url(@spread), as: :json
    assert_response :success
  end

  test "should update spread" do
    patch spread_url(@spread), params: { spread: { query: @spread.query, spread_type: @spread.spread_type } }, as: :json
    assert_response 200
  end

  test "should destroy spread" do
    assert_difference('Spread.count', -1) do
      delete spread_url(@spread), as: :json
    end

    assert_response 204
  end
end
