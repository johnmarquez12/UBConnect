package com.cpen321.ubconnect.ui.otheranswers;

import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;

import com.cpen321.ubconnect.model.ConstantsUtils;
import com.cpen321.ubconnect.model.ErrorHandling;
import com.cpen321.ubconnect.model.IBackEndService;
import com.cpen321.ubconnect.model.data.Question;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class OtherAnswersViewModel extends ViewModel {
    private MutableLiveData<Question> question = new MutableLiveData<>();

    private IBackEndService mBackEndService;

    public OtherAnswersViewModel() {
        super();
        initService();
    }

    private void initService() {
        Retrofit retrofit = new Retrofit.Builder().baseUrl(ConstantsUtils.BaseUrl)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        mBackEndService = retrofit.create(IBackEndService.class);
    }

    public void getQuestionById(String questionId) {

        mBackEndService.getQuestionById(questionId).enqueue(new Callback<Question>() {
            @Override
            public void onResponse(Call<Question> call, Response<Question> response) {
                if (!response.isSuccessful()) {
                    ErrorHandling.errorHandling("dummy");
                }

                if (response.body() == null) {
                    return;
                }


                question.postValue(response.body());
            }

            @Override
            public void onFailure(Call<Question> call, Throwable t) {
                // to do
            }
        });
    }

    public MutableLiveData<Question> getQuestionData() {
        return question;
    }

}
