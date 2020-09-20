class SpreadsController < ApplicationController
  before_action :set_spread, only: [:show, :update, :destroy]

  # GET /spreads
  def index
    @spreads = Spread.all

    render json: @spreads, include: [:cards]
  end

  # GET /spreads/1
  def show
    render json: @spread, include: [:cards]
  end

  # POST /spreads
  def create
    @spread = Spread.new(spread_params)
    if @spread.save
      render json: @spread, status: :created, location: @spread
    else
      render json: @spread.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /spreads/1
  def update
    if @spread.update(spread_params)
      render json: @spread
    else
      render json: @spread.errors, status: :unprocessable_entity
    end
  end

  # DELETE /spreads/1
  def destroy
    @spread.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_spread
      @spread = Spread.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def spread_params
      params.require(:spread).permit(:query, :spread_type, :signature, card_ids: [])
    end
end
