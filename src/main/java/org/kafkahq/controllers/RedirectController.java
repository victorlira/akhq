package org.kafkahq.controllers;

import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.runtime.context.scope.ThreadLocal;
import lombok.extern.slf4j.Slf4j;
import org.kafkahq.modules.KafkaModule;

import javax.inject.Inject;
import java.net.URISyntaxException;

@ThreadLocal
@Slf4j
@Controller
public class RedirectController extends AbstractController {
    private KafkaModule kafkaModule;

    @Inject
    public RedirectController(KafkaModule kafkaModule) {
        this.kafkaModule = kafkaModule;
    }

    @Get
    public HttpResponse slash() throws URISyntaxException {
        return HttpResponse.redirect(this.uri("/" + kafkaModule.getClustersList().get(0) + "/topic"));
    }

    @Get("${micronaut.context.path:}")
    public HttpResponse home() throws URISyntaxException {
        return HttpResponse.redirect(this.uri("/" + kafkaModule.getClustersList().get(0) + "/topic"));
    }

    @Get("${micronaut.context.path:}/{cluster}")
    public HttpResponse topic(String cluster) throws URISyntaxException {
        return HttpResponse.redirect(this.uri("/" + cluster + "/topic"));
    }
}