require 'test_helper'

class CardsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @card = cards(:one)
  end

  test "should get index" do
    get cards_url, as: :json
    assert_response :success
  end

  test "should create card" do
    assert_difference('Card.count') do
      post cards_url, params: { card: { card_type: @card.card_type, desc: @card.desc, meaning_rev: @card.meaning_rev, meaning_up: @card.meaning_up, name: @card.name, name_short: @card.name_short, value: @card.value, value_int: @card.value_int } }, as: :json
    end

    assert_response 201
  end

  test "should show card" do
    get card_url(@card), as: :json
    assert_response :success
  end

  test "should update card" do
    patch card_url(@card), params: { card: { card_type: @card.card_type, desc: @card.desc, meaning_rev: @card.meaning_rev, meaning_up: @card.meaning_up, name: @card.name, name_short: @card.name_short, value: @card.value, value_int: @card.value_int } }, as: :json
    assert_response 200
  end

  test "should destroy card" do
    assert_difference('Card.count', -1) do
      delete card_url(@card), as: :json
    end

    assert_response 204
  end
end
