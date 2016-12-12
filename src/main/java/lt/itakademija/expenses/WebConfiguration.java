package lt.itakademija.expenses;

import java.text.SimpleDateFormat;
import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

@Configuration
public class WebConfiguration extends WebMvcConfigurerAdapter {

	  @Override
	  public void extendMessageConverters(List<HttpMessageConverter<?>> converters) {
		  for (HttpMessageConverter<?> converter : converters) {
			  if (converter instanceof MappingJackson2HttpMessageConverter) {
				  MappingJackson2HttpMessageConverter jsonMessageConverter  = (MappingJackson2HttpMessageConverter) converter;
				  ObjectMapper objectMapper  = jsonMessageConverter.getObjectMapper();
				  objectMapper.disable(
					SerializationFeature.WRITE_DATES_AS_TIMESTAMPS
				  );
				  SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
				  objectMapper.setDateFormat(dateFormat);
				  break;
			  }
		  }
	  }
}